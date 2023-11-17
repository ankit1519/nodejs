const express=require('express')
const path =require('path')

const app=express()
const publicPath=path.join(__dirname,'public_17')
//console.log(publicPath);

app.use(express.static(publicPath))
app.listen(5000);
//http://localhost:5000/about.html