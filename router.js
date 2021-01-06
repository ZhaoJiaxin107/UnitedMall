const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    if(req.url === "/favicon.ico"){
        return;
    }

    let { pathname } = url.parse(req.url, true)
 
    // console.log(pathname)
    let curPage = fs.readFileSync(path.join(__dirname, "./uMall", pathname));   
    res.end(curPage)

}).listen(3003, ()=>{
    console.log("Port 3003 is listening!")
})
