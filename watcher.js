//加载代码，从开始执行到最后一行，在命令行输出 Now watching 消息。 
// 由于调用了 fs.watch，所以 Node.js 不会退出。
// 它等待着fs模块监听目标文件的变化。
// 当目标文件发生变化时，执行回调函数。
// 程序继续等待，继续监听，还不能退出。

const fs = require('fs')
fs.watch('target.txt', () => console.log('File changed!'))
console.log('Now watching target.txt for changes')

// 接收命令行参数
const filename = process.argv[2]
if (!filename) {
	throw Error('A file to watch must be specified!');
}
fs.watch(filename, () => console.log(`File ${filename} changed!`));
console.log(`Now watching ${filename} for changes...`);

// 创建子进程
const spawn = require('child_process').spawn
const filename = process.argv[2]

if (!filename) {
	throw Error('A file to watch must be specified')
}

fs.watch(filename, () => {
	// spawn 返回 ChildProcess 对象
	const ls = spawn('ls', ['‐l', '‐h', filename])
	// pipe 把子进程输出内容直接传送到标准输出流
	ls.stdout.pipe(process.stdout)
})
console.log(`Now watching ${filename} for changes...`)

// 使用 EventEmitter 获取数据
fs.watch(filename, () => {
	const ls = spawn('ls', ['-l', '-h', filename])
	let output = ''

	ls.stdout.on('data', chunk => output += chunk)

	ls.on('close', )
})