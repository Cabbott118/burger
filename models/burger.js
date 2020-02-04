var orm = require("../config/orm.js");

// Create the code to call the ORM functions using 
// burger specific input for the ORM.
var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },

  // Create
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },

  // Update
  updateOne: function (burgerVals, condition, cb) {
    orm.updateOne("burgers", burgerVals, condition, function (res) {
      cb(res);
    });
  },

  // Delete
  deleteOne: function (condition, cb) {
    orm.deleteOne("burgers", condition, function (res) {
      cb(res);
    });
  }
};

module.exports = burger;