module.exports = app => {
    const dashboard = require("../controllers/dashboard.controller");
  
    var router = require("express").Router();
  
    router.get("/", dashboard.home);

  
    app.use('/api/dashboard', router);
  };