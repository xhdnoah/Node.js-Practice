const fs = require('fs')

const book = {
	title: 'Ego is the Enemy',
	author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync('1.json', bookJSON)

const dataBuffer = fs.readFileSync('1.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

// Change the property
data.name = '...'
// stringify the changed object and overwrite the original
const dataJSON = JSON.stringify(data)
fs.writeFileSync('1.json', dataJSON)