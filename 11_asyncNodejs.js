console.log("first");
setTimeout(()=> console.log("second"),2000)
console.log('third');

//drawback of async 
let a=10
let b=20

setTimeout(()=> b=40,2000)
console.log(a+b);  //will be 30 only