
const questionoperation = require('../services/questionoperations');
const logger= require('../utils/logger')(__filename);
const question =require('../dto/question');
const { request, json } = require('express');
const {SUCCESS,SERVER_ERROR}= require('../utils/constants').HTTP_CODES;
const messageBundle= require('../locales/en.json');
const questioncontroller={

addquestion (request,response){
    // response.send('add question route');
    // questionoperation.add();
   // console.log('body is',request.body);
   logger.debug('bodyis'+JSON.stringify(request.body));
    var questionObject= new question(request.body.name,request.body.answers,request.body.author);
const promise=questionoperation.add(questionObject);
promise.then(data=>{
//response.send("question addd sucess");
response.send(messageBundle['question.added']);
    }
).catch(err=>{
   /// response.send('err occur');
   response.send(messageBundle['question.added.error']);
    //console.log(err);
    logger.error(messageBundle['question.added.error']+JSON.stringify(err));
})},

    
    getquestionbyID (request,response){
        let id= request.query.id;
        console.log(request.query.id);
       // response.send('reques comes');
        const promise= questionoperation.findByQuestionID(id);
        promise.then(result=>{
         response.status(SUCCESS).json({"questions":result});
        }).catch(err=>{
         response.status(SERVER_ERROR).json({'message':'Error in get question'+JSON.stringify(err)});
        })

     
        },
        getquestionbyName (request,response){
           let name= request.params.name;
           console.log('params name is',name);
           //response.send('params rec'+name);
           
            const promise= questionoperation.findByQuestionName(name);
            promise.then(result=>{
             response.status(SUCCESS).json({"questions":result});
            }).catch(err=>{
             response.status(SERVER_ERROR).json({'message':'Error in get question'+JSON.stringify(err)});
            })
         
        },
        
        getquestions(reject,response){
           const promise= questionoperation.readAll();
           promise.then(result=>{
            response.status(SUCCESS).json({"questions":result});
           }).catch(err=>{
            response.status(SERVER_ERROR).json({'message':'Error in get question'+JSON.stringify(err)});
           })
        }
    }
        
    

module.exports=questioncontroller;