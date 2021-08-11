import React, { useState } from "react"
import { StyleSheet, TextInput } from "react-native"
import { Note, ScreenProps } from "~types"
import { PrimaryView } from "~components/templates/PrimaryView"
import { Button } from "~components/atoms/Button"

type Props = ScreenProps<"CreateNote"> & {
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
		<PrimaryView style={styles.container}>
			<TextInput style={styles.input} value={note} onChangeText={setNote} />
			<Button onPress={handleAddNote}>Create note</Button>
		</PrimaryView>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#00f",
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
