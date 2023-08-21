module.exports = app => {
  const tutorials = require("../controllers/tecnocopy.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", ventas.create);

  // Retrieve all Tutorials
  router.get("/", ventas.findAll);

  // Retrieve all published Tutorials
  router.get("/published", ventas.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", ventas.findOne);

  // Update a Tutorial with id
  router.put("/:id", ventas.update);

  // Delete a Tutorial with id
  router.delete("/:id", ventas.delete);

  // Delete all ventas
  router.delete("/", ventas.deleteAll);

  app.use('/api/ventas', router);
};
