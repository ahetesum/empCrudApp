const User = require('../models/user.model');
const {generateCrudMethods} = require('../services');
const ObjectId = require('mongoose').Types.ObjectId;
const userCrud= generateCrudMethods(User);
const crypto = require("crypto");


exports.login = (req,res,next)=>{
    console.log(req.body.phone)

    User.findOne({
          phone: req.body.phone
        }).then(data=>{
            console.log(data)
            res.status(200).json({token:data.token});

        }).catch(err=>console.log(err))
}

exports.register = (req,res,next)=>{
    req.body.token= crypto.randomBytes(16).toString("hex");
    console.log(req.body)
    userCrud.create(req.body)
        .then(data=>{
            res.status(201).json(data);
        }).catch(err=>{
            res.status(400).json({
                error: err
            });
         })
}

exports.logout = (req,res,next)=>{
    res.status(200).json({message:"Sucessfully logged out"})
}