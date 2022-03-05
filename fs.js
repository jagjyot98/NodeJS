//fs-> file system module: helps to make files, folders and handle files and data in them

// const fs = require("fs");   //checks within node for a module, here 'fs'|| A way of importing a module

const fs=require("./temp.js")   //require method goes to the path file and executes the file and prints any output, if any
console.log(fs+"\t by fs.js");        //if anything is exported from the path then it will be stored here

let ans=fs.add(45,4)
console.log(ans)

// // appends data into a file , if file is not present , it creates file and then appends
// let rs=fs.appendFileSync("f1.txt","\nhello");

// let data=fs.readFileSync("f1.txt","utf-8")      //utf-8 converts encoded data to readable form
// console.log(typeof data)    //if not used utf-8 then a buffer object will be returned which is actually easier to store
// // console.log(data+"") // here [+""] converts encoded data to readable string 
// console.log(data)
