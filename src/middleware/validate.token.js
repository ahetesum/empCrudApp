const User = require('../models/user.model');


verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
  
    if (!token) {
      return res.status(403).send({
        message: "No token provided!"
      });
    }
    User.findOne({token:token})
    .then(user=>{
        req.userId = user.id;
        next();
    })      
  };
  
//   isAdmin = (req, res, next) => {
//     User.findByPk(req.userId).then(user => {
//       user.getRole().then(roles => {
//         for (let i = 0; i < roles.length; i++) {
//           if (roles[i].name === "admin") {
//             next();
//             return;
//           }
//         }
  
//         res.status(403).send({
//           message: "Require Admin Role!"
//         });
//         return;
//       });
//     });
//   };
  
const middleware = {
    verifyToken: verifyToken,
  };
  module.exports = middleware;