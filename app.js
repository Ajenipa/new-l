const http = require("http")
const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        console.log(res)
        res.end("home")
    }
    if(req.url === "/about"){
        res.end("about us")
    }
    else{
        res.end(
            `<h1>OOPS</h1>
            <p> we cant find your page </p> 
            <a href="/">go back</a>`
            
            )
    }
    

})
server.listen(3000)