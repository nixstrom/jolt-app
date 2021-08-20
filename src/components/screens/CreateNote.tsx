import React, { useState } from "react"
import { StyleSheet } from "react-native"
import { Note, ScreenProps } from "~types"
import { PrimaryView } from "~components/templates/PrimaryView"
import { Button } from "~components/atoms/Button"
import { TextArea } from "~components/atoms/TextArea"

type Props = ScreenProps<"CreateNote"> & {
	onAddNote: (note: Note) => void
}

const MAX_LENGTH = 140

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
			<TextArea
				autoFocus={true}
				maxLength={MAX_LENGTH}
				value={note}
				onChangeText={setNote}
				placeholder="Enter note"
			/>
			<Button onPress={handleAddNote}>Create note</Button>
		</PrimaryView>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "flex-start",
		paddingTop: 60,
	},
})
