let a=20;
let b=0;
/*let waitingData=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30)
    },2000)
   
})
waitingData.then((data)=>{
    b=data
    console.log(a+b);
})*/


//in short
new Promise((resolve,reject)=> setTimeout(()=>resolve(30))).then((data)=>console.log(a+data)) 