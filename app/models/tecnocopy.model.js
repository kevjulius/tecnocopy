const sql = require("./db.js");

// constructor
const Ventas = function(ventas) {
  this.usuario_id = ventas.usuario_id;
};

Ventas.create = (newVentas, result) => {
  sql.query("INSERT INTO ventas SET ?", newVentas, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created ventas: ", { id: res.insertId, ...newVentas });
    result(null, { id: res.insertId, ...newVentas });
  });
};

Ventas.findById = (id, result) => {
  sql.query(`SELECT * FROM ventas WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found ventas: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};


Ventas.remove = (id, result) => {
  sql.query("DELETE FROM ventas WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
     
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted ventas with id: ", id);
    result(null, res);
  });
};

Ventas.removeAll = result => {
  sql.query("DELETE FROM ventas", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} tutorials`);
    result(null, res);
  });
};

module.exports = Ventas;
