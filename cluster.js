const http = require('http')
const numCPUS = require('os').cpus().length
const cluster = require('cluster')
if (cluster.isMaster) {
	console.log('Master process id is', process.pid)
	//fork workers
	for (let i = 0; i < numCPUS; i++) {
		cluster.fork()
	}
	cluster.on('exit', function (worker, code, signal) {
		console.log('worker process died, id', worker.process.pid)
	})
} else {
	// worker 可共享同一个 TCP 连接
	// 这里是一个 http 服务器
	http.createServer(function (req, res) {
		res.writeHead(200)
		res.end('hello world')
	}).listen(8000)
}

// cluster模块采用的是经典的主从模型，
// Cluster会创建一个master，然后根据你指定的数量复制出多个子进程，
// 可以使用 cluster.isMaster属性判断当前进程是master还是worker(工作进程)。
// 由 master进程来管理所有的子进程，主进程不负责具体的任务处理，主要工作是负责调度和管理。
// master进程内部启动了一个TCP服务器，真正监听端口的只有这个服务器，
// 当来自前端的请求触发服务器的connection事件后，master会将对应的socket句柄发送给子进程。
// 核心就是父进程（即 master 进程）负责监听端口，接收到新的请求后将其分发给下面的 worker 进程