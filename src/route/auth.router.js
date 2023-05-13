const middleware = require("../middleware/validate.token");

module.exports = app => {
    const auth = require("../controllers/auth.controller");
  
    var router = require("express").Router();
  
    router.post("/login", auth.login);
  
    router.post("/register", auth.register);
    
    router.get("/logout",[middleware.verifyToken], auth.logout);

  
    app.use('/api/auth', router);
  };