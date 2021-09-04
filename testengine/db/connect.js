const mongoose=require('mongoose');
const dbOptions={
    useNewUrlParser:true,
    poolSize:process.env.POOL_SIZE
};
mongoose.connect(process.env.DB_URL,dbOptions,(err)=>{


    if(err){
        console.log('CONNECT ERROR',err);
    }else{
        console.log("CONNECT");
    }
});
module.exports=mongoose;