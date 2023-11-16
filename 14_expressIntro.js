const express=require('express')
const app=express();
app.get('',(req,res)=>{
    res.send('welcome to home page')
})
app.get('/about',(req,res)=>{
    res.send('welcome to about page')
})
app.get('/blog',(req,res)=>{
    res.send('welcome to blog page')
})
app.get('/contact',(req,res)=>{
    res.send('Contact us')
})
app.listen(5000)