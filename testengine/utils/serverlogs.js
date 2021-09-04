const fs= require('fs');
const path=require('path');
const serverlogfilepath=path.join(path.normalize(__dirname+"/.."),'/logs/serverlog');
const stream=fs.createWriteStream(serverlogfilepath,{interval:'7d'});
module.exports=stream;