module.exports = app => {
  const employee = require("../controllers/employee.controller");

  var router = require("express").Router();

  router.get("/", employee.findAll);

  router.post("/", employee.create);
  

  router.get("/:id", employee.getById);

  app.use('/api/employee', router);
};