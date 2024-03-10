const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product',(req,res,next)=>{
    res.send("<form action='/product' method='POST'><input type='text' name='title' /><input type='number' name='size' /><button type='submit'>Add product</button></form>")
    // res.send({sa: 1})
})

app.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/');
})


app.use('/',(req,res,next)=>{
    // console.log("middleware-2")
    res.send("<h1>Good Express</h1>")
    // res.send({sa: 1})
})

app.listen(4000);

