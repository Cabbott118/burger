var connection = require("../config/connection.js");

// Create methods that execute necessary MySQL commands in the
// controllers.

//selectAll()
//insertOne()
//updateOne()

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

  function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
      var value = ob[key];

      if (Object.hasOwnProperty.call(ob, key)) {

        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }

    return arr.toString();
  }

  var orm = {
    selectAll: function(table, cb) {
      var queryString = "SELECT * FROM " + table + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function(table, cols, vals, cb) {
      var queryString = "INSERT INTO " + table;
  
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";
  
      console.log(queryString);
  
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
        console.log(result);
        cb(result);
      });
    },

    updateOne: function(table, burgerVals, id, cb) {
      var queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objToSql(burgerVals);
      queryString += " WHERE ";
      queryString += id;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        console.log(result);
        cb(result);
      });
    },

    deleteOne: function(table, id, cb) {
      var queryString = "DELETE FROM " + table;
      queryString += " WHERE ";
      queryString += id;
  
      connection.query(queryString, function(err, result) {
        if (err) {
          console.log("Big ol error")
          throw err;
        }
        console.log(result);
        cb(result);
      });
    }
  };

//Export the ORM object in 'module.exports'
module.exports = orm;