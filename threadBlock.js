const http = require('http')
const longComputation = () => {
	let sum = 0
	for (let i = 0; i < le10; i++) {
		sum += i
	}
	return sum
}
const server = http.createServer()
server.on('request', (req, res) => {
	if (req.url === '/compute') {
		console.info('start', new Date())
		const sum = longComputation()
		console.info('end', new Date())
		return res.end(`Sum is ${sum}`)
	} else {
		res.end('Ok')
	}
})

server.listen(3000)