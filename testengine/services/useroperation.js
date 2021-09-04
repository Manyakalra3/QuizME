const usermodel = require('../db/models/userschema');
const useroperation={
add(userobject){
const promise = usermodel.create(userobject);
return promise;
},
delete(){

},
update(){

},
search(){

}
}
module.exports=useroperation;