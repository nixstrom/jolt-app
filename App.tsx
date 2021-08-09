import { StatusBar } from "expo-status-bar"
import React, { useState, useEffect } from "react"
import { StyleSheet, View } from "react-native"
import { Note } from "~types"
import { notes as notesFixture } from "~fixtures/notes"
import { Notes } from "~components/Notes"
import { CreateNote } from "~components/CreateNote"

const TEN_SECONDS = 1000 * 10

const App = () => {
	const [notes, setNotes] = useState(notesFixture)

	useEffect(() => {
		const interval = setInterval(() => {
			const expiredTimestamp = Date.now() - TEN_SECONDS

			setNotes(prevNotes =>
				prevNotes.filter(note => Math.floor(note.createdAt) > expiredTimestamp)
			)
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	const handleAddNote = (note: Note) => {
		setNotes(prevNotes => [...prevNotes, note])
	}

	const handleRemoveNote = (id: Note["id"]) => {
		setNotes(prevNotes => prevNotes.filter(note => note.id !== id))
	}

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<CreateNote onAddNote={handleAddNote} />
			<Notes notes={notes} onRemoveNote={handleRemoveNote} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
})

export default App
