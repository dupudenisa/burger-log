$(function() {
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newburgs");
  
      var newDevourme = {
        devour: newDevour
      };
  
      
      $.ajax("/api/burgs/" + id, {
        type: "PUT",
        data: newDevourme
      }).then(
        function() {
          console.log("changed burgs to", newDevour);
          
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      
      event.preventDefault();
  
      var newBurg = {
        name: $("#bb").val().trim(),
        devour: $("[name=devour]:checked").val().trim()
      };
  
     
      $.ajax("/api/burgs", {
        type: "POST",
        data: newBurg
      }).then(
        function() {
          console.log("created new burger");
         
          location.reload();
        }
      );
    });
  
    $(".delete-burg").on("click", function(event) {
      var id = $(this).data("id");
  
      
      $.ajax("/api/burgs/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          
          location.reload();
        }
      );
    });
  });
  