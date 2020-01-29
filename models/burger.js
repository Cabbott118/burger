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
  updateOne: function (burgerVals, id, cb) {
    orm.updateOne("burgers", burgerVals, id, function (res) {
      cb(res);
    });
  },

  // Delete
  deleteOne: function (id, cb) {
    orm.deleteOne("burgers", id, function (res) {
      cb(res);
    });
  }
};

module.exports = burger;