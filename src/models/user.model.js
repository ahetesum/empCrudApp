const mongoose =require('mongoose');

module.exports= mongoose.model('user',{
    phone:{type: String},
    email:{type: String},
    pin:{type: String},
    token:{type: String},

});