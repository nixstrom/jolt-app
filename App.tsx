import React, { useState, useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Note, RootStackParamList } from "~types"
import { notes as notesFixture } from "~fixtures/notes"
import { Notes } from "~components/screens/Notes"
import { CreateNote } from "~components/screens/CreateNote"

const TEN_SECONDS = 1000 * 10

const App = () => {
	const [notes, setNotes] = useState(notesFixture)
	const Stack = createNativeStackNavigator<RootStackParamList>()

	useEffect(() => {
		const interval = setInterval(() => {
			const expiredTimestamp = Date.now() - TEN_SECONDS

			setNotes(prevNotes =>
				prevNotes.filter(note => Math.floor(note.createdAt) > expiredTimestamp)
			)
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	const handleAddNote = (note: Note) =>
		setNotes(prevNotes => [...prevNotes, note])

	const handleRemoveNote = (id: Note["id"]) =>
		setNotes(prevNotes => prevNotes.filter(note => note.id !== id))

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Notes">
				<Stack.Screen name="Notes">
					{props => (
						<Notes
							{...props}
							{...{
								notes,
								onRemoveNote: handleRemoveNote,
							}}
						/>
					)}
				</Stack.Screen>
				<Stack.Screen name="CreateNote">
					{props => (
						<CreateNote
							{...props}
							{...{
								onAddNote: handleAddNote,
							}}
						/>
					)}
				</Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App
