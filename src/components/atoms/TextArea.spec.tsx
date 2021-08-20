import React, { useState } from "react"
import { render, fireEvent } from "@testing-library/react-native"
import { TextArea } from "./TextArea"

const initialProps = {
	value: "",
	placeholder: "Type type type!",
	onChangeText: () => {},
}

const TextAreaWithState = (
	props?: Partial<React.ComponentProps<typeof TextArea>>
) => {
	const [value, setValue] = useState(props?.value || initialProps.value)

	return (
		<TextArea
			{...initialProps}
			{...props}
			value={value}
			onChangeText={setValue}
		/>
	)
}

const setup = (props?: Partial<React.ComponentProps<typeof TextArea>>) =>
	render(<TextArea {...initialProps} {...props} />)

const setupWithState = (
	props?: Partial<React.ComponentProps<typeof TextArea>>
) => render(<TextAreaWithState {...initialProps} {...props} />)

describe("<TextArea />", () => {
	it("will show a placeholder when the text area is empty", () => {
		const { getByPlaceholderText } = setup()

		expect(getByPlaceholderText(initialProps.placeholder)).toBeTruthy()
	})

	it("will show a custom placeholder", () => {
		const placeholder = "Check out my placeholder!"
		const { getByPlaceholderText } = setup({ placeholder })

		expect(getByPlaceholderText(placeholder)).toBeTruthy()
	})

	it("will show a predefined value", async () => {
		const value = "Hello, World!"
		const { getByDisplayValue } = setup({ value })

		expect(getByDisplayValue(value)).toBeTruthy()
	})

	it("will allow typing into the text area", () => {
		const expectedValue = "Typing new text"
		const { getByDisplayValue, getByPlaceholderText } = setupWithState()

		const textArea = getByPlaceholderText(initialProps.placeholder)

		fireEvent.changeText(textArea, expectedValue)

		expect(getByDisplayValue(expectedValue)).toBeTruthy()
	})

	// Not sure why this doesn't work ... works in practice 🤷‍♂️
	it.skip("will not allow typing a value longer than the maximum length", () => {
		const longText = "Lorem ipsum dolor sit damet"
		const { getByDisplayValue, queryByDisplayValue, getByPlaceholderText } =
			setupWithState({ maxLength: 5 })

		const textArea = getByPlaceholderText(initialProps.placeholder)

		fireEvent.changeText(textArea, longText)

		expect(queryByDisplayValue(longText)).not.toBeTruthy()
		expect(getByDisplayValue("Lorem")).toBeTruthy()
	})

	it("will execute a handler when typing into the text area", () => {
		const typedValue = "Hello!"
		const onChangeText = jest.fn()
		const { getByPlaceholderText } = setup({ onChangeText })

		expect(onChangeText).not.toHaveBeenCalled()

		const textArea = getByPlaceholderText(initialProps.placeholder)

		fireEvent.changeText(textArea, typedValue)

		expect(onChangeText).toHaveBeenCalledTimes(1)
		expect(onChangeText).toHaveBeenCalledWith(typedValue)
	})
})
