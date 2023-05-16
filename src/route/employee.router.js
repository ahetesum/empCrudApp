const middleware = require("../middleware/validate.token");

module.exports = app => {
  const employee = require("../controllers/employee.controller");

  var router = require("express").Router();

  router.get("/",[middleware.verifyToken], employee.findAll);

  router.post("/",[middleware.verifyToken], employee.create);

  router.get("/:id",[middleware.verifyToken], employee.getById);

  router.put("/:id",[middleware.verifyToken], employee.update);

  router.delete("/:id",[middleware.verifyToken], employee.delete);


  app.use('/api/v1/employee', router);
};