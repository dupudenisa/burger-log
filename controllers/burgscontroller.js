var express = require("express");

var router = express.Router();


var burg = require("../models/burg.js");


router.get("/", function(req, res) {
  burg.all(function(data) {
    var hbsObject = {
      burgs: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgs", function(req, res) {
  burg.create([
    "name", "devour"
  ], [
    req.body.name, req.body.devour
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgs/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burg.update({
    devour: req.body.devour
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgs/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burg.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
