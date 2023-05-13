module.exports = app => {
  const employee = require("../controllers/employee.controller");

  var router = require("express").Router();

  router.get("/", employee.findAll);

  router.post("/", employee.create);
  

  // router.get("/employee/:id", employee.getBrandCategory);

  app.use('/api/employee', router);
};