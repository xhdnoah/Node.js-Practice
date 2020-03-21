const http = require('http')

const server = http.createServer()
server.listen(3000, () => {
	process.title = 'NodeJs 进程测试'
	console.log('process id', process.pid)
})