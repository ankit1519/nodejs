const express=require('express')
const app=express();
app.get('',(req,res)=>{
    //html
    res.send('<h1>welcome to home page<h1>')
})
app.get('/about',(req,res)=>{
    //html
    res.send('<h1>welcome to about page<h1>')
})
app.get('/blog',(req,res)=>{
    res.send({
        name:"ankit",
        email:"ancde@gmailtest.com"
    })
})
app.get('/contact',(req,res)=>{

    //html
    res.send(`
    <input type="text" value=${req.query.name}>
    <button> Click</button>

    <a href="/about">go to about</a>
    `)
})
app.listen(5000)