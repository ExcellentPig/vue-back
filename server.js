let http = require('http');
let users = [
	{id:11,name:'khan1'},
	{id:22,name:'khan2'},
	{id:33,name:'khan3'}
]
let server = http.createServer(function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
	if(req.url === '/api/users'){
		res.end(JSON.stringify(users));
	}else{
		res.end('Not Found');
	}
})
server.listen(3000,()=>{
	console.log('后端API接口服务器启动在3000端口')
});