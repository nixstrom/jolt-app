import React, { useState } from "react"
import { StyleSheet, View, TextInput } from "react-native"
import { Note } from "~types"
import { Button } from "~components/atoms/Button"

type Props = {
	onAddNote: (note: Note) => void
}

export const CreateNote = ({ onAddNote }: Props) => {
	const [note, setNote] = useState("")

	const handleAddNote = () => {
		if (note) {
			const timestamp = Date.now()
			onAddNote({
				id: timestamp.toString(),
				body: note,
				createdAt: timestamp,
				pinned: false,
			})

			setNote("")
		}
	}

	return (
		<View style={styles.container}>
			<TextInput style={styles.input} value={note} onChangeText={setNote} />
			<Button onPress={handleAddNote}>Create note</Button>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f0f",
		alignItems: "center",
		justifyContent: "flex-start",
		paddingTop: 60,
	},
	heading: {
		fontSize: 24,
		fontWeight: "bold",
	},
	input: {
		backgroundColor: "white",
		width: "90%",
		margin: 10,
		padding: 10,
	},
	note: {
		borderTopColor: "#eee",
		borderTopWidth: 1,
		padding: 10,
		width: "100%",
	},
})
