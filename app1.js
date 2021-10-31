// const name = require("./module1")
// const Greet = require("./module2")
// const Data = require("./module3")
// require("./module4")
// Greet("jamiu")
// Greet(name.name1)
// Greet(name.name3)
// console.log(Data)
// const os = require("os")
// console.log(os.userInfo())
// console.log(os.uptime())
// const currentOs = {
//     name:os.type(),
//     release:os.release(),
//     totalmemory:os.totalmem(),
//     freememory:os.freemem()
// }
// console.log(currentOs)
// const path = require("path")
// console.log(path.sep)
// const filepath= path.join("/content/", "subfolder", "test.txt")
// console.log(filepath)
// const base = path.basename(filepath)
// console.log(base)
// const absolute = path.resolve("content", "subfolder", "test.txt")
// console.log(absolute)
// const {readFileSync,writeFileSync} = require('fs')
// const first =  readFileSync("./content/first.txt", 'utf-8')
// const second =  readFileSync("./content/second.txt", 'utf-8')
// writeFileSync("./content/third.txt", `this is all ${first}and${second}`, {flag:'a'})
// console.log(first,second)
const {readFile,writeFile} =  require("fs")
readFile("./content/first.txt", "utf-8", (err,result)=>{
    if(err){
        console.log(err)
    }else{
        const first = result
        console.log(first)
        readFile("./content/second.txt", "utf8", (err,result)=>{
            if(err){
                console.log(err)
            }
            const second = result
            console.log(second)
            writeFile("./content/secondnew.txt",`this is it`, (err,result)=>{
                console.log(result)
                
            })
        })
    }

})
console.log("start the NEXTI!")