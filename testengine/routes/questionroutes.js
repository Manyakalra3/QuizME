const express=require('express');
const questioncontroller= require('../controllers/questioncontroller');
const route = express.Router();
route.post('/addquestion',questioncontroller.addquestion);
route.get('/getquestionbyid',questioncontroller.getquestionbyID);
route.get('/getquestionbyname/:name',questioncontroller.getquestionbyName);
route.get('/getquestions',questioncontroller.getquestions);

module.exports=route;