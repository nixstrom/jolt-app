import React from "react"
import {
	StyleSheet,
	TextInput as RNTextInput,
	TextInputProps,
} from "react-native"

type Props = {
	value: string
	placeholder: string
	maxLength?: number
	autoFocus?: TextInputProps["autoFocus"]
	onChangeText: TextInputProps["onChangeText"]
}

export const TextArea = ({
	value,
	placeholder,
	autoFocus,
	maxLength,
	onChangeText,
}: Props) => (
	<RNTextInput
		style={styles.input}
		multiline
		numberOfLines={5}
		textAlignVertical="top"
		{...{ value, placeholder, autoFocus, maxLength, onChangeText }}
		maxLength={5}
	/>
)

const styles = StyleSheet.create({
	input: {
		backgroundColor: "#eee",
		borderWidth: 0,
		fontSize: 18,
		width: "90%",
		margin: 10,
		padding: 10,
	},
})
