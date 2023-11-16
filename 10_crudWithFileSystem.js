const fs=require('fs')
const path=require('path')
const dirPath=path.join(__dirname,'crud')
const filePath=`${dirPath}/10.txt`
//fs.writeFileSync(`${dirPath}/10.txt`,'this is a simple text file created in 10_crudWithFs')
fs.readFile(filePath,'utf-8',(err,items)=>console.log(items));
//fs.appendFile(filePath,' and file name is 10.txt',(err)=>{if(!err) console.log('file is updated')})
fs.rename(filePath,`${dirPath}/10_crud.txt`,(err)=>{if(!err) console.log('filename is renamed')})

//delete
fs.writeFileSync(`${dirPath}/10.txt`,'this is a simple text file created in 10_crudWithFs')
fs.unlinkSync(filePath)