const express=require('express');
const route = express.Router();
const usercontroller= require('../controllers/usercontroller');
const questioncontroller= require('../controllers/questioncontroller');
route.post('/login',usercontroller.login);
route.post('/register',usercontroller.register);
module.exports=route;