const http = require('http');
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, 'dist');
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8'};
http.createServer((req,res)=>{let url=(req.url||'/').split('?')[0]; if(url==='/') url='/index.html'; const file=path.join(root,url); fs.readFile(file,(err,data)=>{if(err){res.writeHead(404); return res.end('Not found')} res.writeHead(200,{'Content-Type':types[path.extname(file)]||'text/plain'}); res.end(data)})}).listen(3000,'0.0.0.0');
