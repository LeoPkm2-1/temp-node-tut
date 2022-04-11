const http=require('http');

const server=http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url==='/'){
        res.end('this is home page');
    }
    if(req.url==='/about'){
        res.end('this is short history');
    }
    res.end(`
    <h1>SOS!</h1>
    <p> we can't seem to find this page you are looking for</p>
    <a href='/'>back home now</a>
    `)
})

server.listen(5000);