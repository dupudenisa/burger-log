var orm = require("../config/orm.js");

var burg = {
  all: function(cb) {
    orm.all("burgs", function(res) {
      cb(res);
    });
  },
  
  create: function(cols, vals, cb) {
    orm.create("burgs", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgs", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgs", condition, function(res) {
      cb(res);
    });
  }
};


module.exports = burg;
