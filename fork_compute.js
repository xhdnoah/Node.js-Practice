const computation = () => {
	let sum = 0
	console.info('computation start')
	console.time('computation time consuming')
	for (let i = 0; i < le10; i++) {
		sum += i
	}
	console.info('computation end')
	console.timeEnd('computation time consuming')
	return sum
}

// If the Node.js process is spawned with an IPC channel (see the Child Process and Cluster documentation), 
// the 'message' event is emitted whenever a message sent by a parent process using childprocess.send() is received by the child process.
process.on('message', msg => {
	console.log(msg, 'process.pid', process.pid)
	const sum = computation()
	// If Node.js is spawned with an IPC channel, 
	// the process.send() method can be used to send messages to the parent process. 
	// Messages will be received as a 'message' event on the parent's ChildProcess object.
	process.send(sum)
})