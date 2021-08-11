import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Note, ScreenProps } from "~types"
import { PrimaryView } from "~components/templates/PrimaryView"
import { Button } from "~components/atoms/Button"
import { CreateNoteTrigger } from "~components/molecules/CreateNoteTrigger"

type Props = ScreenProps<"Notes"> & {
	notes: Note[]
	onRemoveNote: (id: Note["id"]) => void
}

export const Notes = ({ notes, onRemoveNote }: Props) => {
	return (
		<PrimaryView style={styles.container}>
			{notes.map(note => (
				<View key={note.id} style={styles.note}>
					<Text>{note.body}</Text>
					<Button onPress={() => onRemoveNote(note.id)}>Delete</Button>
				</View>
			))}
			<CreateNoteTrigger />
		</PrimaryView>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "flex-start",
	},
	note: {
		borderTopColor: "#eee",
		borderTopWidth: 1,
		padding: 10,
		width: "100%",
	},
})
