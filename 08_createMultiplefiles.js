const path=require('path')
const fs=require('fs')
const dirPath=path.join(__dirname,'09_files')
console.log(dirPath);
/*for(let i=5;i<30;i++){
    fs.writeFileSync(`${dirPath}/ hello${i+1}.txt`,`a simple text file created by loop. file number ${i+1}`)
}*/
//fs.readdir(dirPath,(err,files)=>console.log(files))  //it will give array of files
fs.readdir(dirPath,(err,files)=>files.forEach((file)=>console.log("filename is: ",file)))