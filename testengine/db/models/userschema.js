const connection = require('../connect');
const {Schema}=require('mongoose');
const   UserSchema = new Schema({
    name:{type:Schema.Types.String,required:true,unique:true},
    password:{type:Schema.Types.String},
    phone:{type:Schema.Types.String,required:true},
    email:{type:Schema.Types.String},
   logintime:{type:Schema.Types.Date,default:new Date()},
},{timestamps:true});
const userModel = connection.model('users',UserSchema);
module.exports=userModel;