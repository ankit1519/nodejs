const express=require('express')
const app=express();
app.get('',(req,res)=>{
    console.log(`data send by browser-->>> ${req.query.name}`);
    res.send('welcome to home page '+ req.query.name )
})
app.listen(5000)