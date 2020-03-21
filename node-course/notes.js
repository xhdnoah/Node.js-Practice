const fs = require('fs')

const getNotes = function () {
	return 'Your notes...'
}

const addNotes = function (title, body) {
	const notes = loadNotes()
	// const duplicateNotes = notes.filter(function (note) {
	// 	return note.title === title
	// })
	// the find method will stop when finding the first one
	const duplicateNote = notes.find((note) => {
		note.title === title
	})

	if (!duplicateNote) {
		notes.push({
			title: title,
			body: body
		})
		saveNotes(notes)
	} else {
		console.log('Note title taken!')
	}
}

const removeNote = function (title) {
	const notes = loadNotes()
	const notesToSave = notes.filter(note => note.title !== title)
	saveNotes(notesToSave)
}

const listNotes = () => {
	const notes = loadNotes()
	notes.forEach((note) => {
		console.log(note.title)
	})
}

const readNote = (title) => {
	const notes = ll
}

const saveNotes = function (notes) {
	const dataJSON = JSON.stringify(notes)
	fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
	try {
		const dataBuffer = fs.readFileSync('notes.json')
		const dataJSON = dataBuffer.toString()
		return JSON.parse(dataJSON)
	} catch (e) {
		return []
	}
}
module.exports = {
	getNotes: getNotes,
	addNotes: addNote,
	removeNote: removeNote
}