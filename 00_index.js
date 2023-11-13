const app=require('./01_app')
console.log(app.x);
app.fun()
app.fun2(12)
let arr=[1,2,3,4,5,6,7,8,1,11,23,45,88,32,999]
let res=arr.filter((element)=>element%4===0)
console.log(res);