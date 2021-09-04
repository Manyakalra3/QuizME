const QuestionModel = require('../db/models/questionschema');
const questionmodel = require('../db/models/questionschema');
const questionoperation={
add(questionobject){
const promise = questionmodel.create(questionobject);
return promise;
},
delete(){
    // QuestionModel.remove({'name':name},(err)=>{
    //     if(err){

    //     }else{

    //     }
    // })
    QuestionModel.findByIdAndDelete(id,(Err,doc)=>{
        if(Err){

        }else{

        }
    })
},
update(){
QuestionModel.findByIdAndUpdate(id,{name:'ABCD'},(Err,doc)=>{
        if(Err){

        }else{
            
        }
    })
},
findByQuestionID(id){
    const promise=new Promise((resolve,reject)=>{
        QuestionModel.findById(id,(err,doc)=>{
            if(err){
        reject(err);
            }else{
        resolve(doc);
            }
        })
       
    })
    return promise;
},
findByQuestionName(questionname){
    const regex= new RegExp(questionname,'i');

    const promise= new Promise((resolve,reject)=>{
        QuestionModel.findOne({name:{$regex:regex}},(err,doc)=>{
            if(err){
        reject(err);
            }else{
                resolve(doc);
            }
        })
    })
return promise;
},
search(){

},
readAll(){
    const promise= new Promise((resolve,reject)=>{
        QuestionModel.find({},(err,docs)=>{
            if(err){
                reject(err);
            }else{
        resolve(docs);
            }
        });
    });
    return promise;

}
}
module.exports=questionoperation;