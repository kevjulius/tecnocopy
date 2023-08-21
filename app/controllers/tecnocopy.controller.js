const Venta = require("../models/tecnocopy.model.js");

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  
  const venta = new Venta({
    usuario_id: req.body.usuario_id
  });

  // Save Tutorial in the database
  Venta.create(venta, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the venta."
      });
    else res.send(data);
  });
};

// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
  const usuario_id = req.query.usuario_id;

  Venta.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving venta."
      });
    else res.send(data);
  });
};

// Find a single Tutorial by Id
exports.findOne = (req, res) => {
  Venta.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Venta with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Venta with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};






// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Venta.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    else res.send({ message: `All Ventas were deleted successfully!` });
  });
};
