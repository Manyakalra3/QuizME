const morgan= require('morgan');
const express= require('express');
const app=express();
const streamlog= require('./utils/serverlogs');
const dotenv = require('dotenv');
dotenv.config();
app.use(morgan('combined',{stream:streamlog}));
app.use(express.static('public'));
app.use(express.json());
app.use('/',require('./routes/questionroutes'));
app.use('/',require('./routes/userroute'));
app.use(require('./utils/error404'));
// app.get('/profile',(request,response)=>{
//     response.send('profile');
// })//route
const logger=require('./utils/logger')(__filename);
const server=app.listen(1234,()=>{
    console.log('server started');
    logger.debug('server started'+server.address().port);
})