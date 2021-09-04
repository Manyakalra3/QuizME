
const useroperation = require('../services/useroperation');
const user =require('../dto/user');
const { request } = require('express');
const usercontroller={

register(request,response){
    // response.send('add question route');
    // questionoperation.add();
    console.log('body is',request.body);
var userObject= new user(request.body.name,request.body.phone);
const promise=useroperation.add(userObject);
promise.then(data=>{
response.send("user addd sucess");
    }
).catch(err=>{
    response.send('err occur');
    console.log(err);
})},

    
login(request,response){
    response.send('login route');
},
    }
        
    

module.exports=usercontroller;
