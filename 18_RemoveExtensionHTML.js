const express=require('express')
const path =require('path')

const app=express()
const publicPath=path.join(__dirname,'public_17')
//console.log(publicPath);
app.get("/",(req,res)=>{
    res.sendFile(`${publicPath}/index.html`)
})
app.get("/about",(req,res)=>{
    res.sendFile(`${publicPath}/about.html`)
})
app.get("/blog",(req,res)=>{
    res.sendFile(`${publicPath}/blog.html`)
})

app.get("*",(req,res)=>{
    res.sendFile(`${publicPath}/noPage.html`)
})
//app.use(express.static(publicPath))
app.listen(5000);