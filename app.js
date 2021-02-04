const express = require('express');
const app =express();

const bookRoutes = require('./api/routes/books');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/books',bookRoutes);
app.use((req,res,next)=>{
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message:error.message,
        }
    });
})
module.exports = app;