import React from "react"
import { render, fireEvent } from "@testing-library/react-native"
import { FloatingButton } from "./FloatingButton"

const initialProps = {
	children: "Hello!",
	onPress: () => {},
}

const setup = (props: Partial<React.ComponentProps<typeof FloatingButton>>) =>
	render(<FloatingButton {...initialProps} {...props} />)

describe("<FloatingButton />", () => {
	it("will show the button title", async () => {
		const { findByText } = setup({ children: "Hello, World!" })

		const floatingButton = await findByText("Hello, World!")

		expect(floatingButton).toBeTruthy()
	})

	it("will execute a handler when pressed", async () => {
		const onPress = jest.fn()
		const { findByText } = setup({ onPress })

		expect(onPress).not.toHaveBeenCalled()

		const floatingButton = await findByText("Hello!")

		fireEvent(floatingButton, "press")

		expect(onPress).toHaveBeenCalledTimes(1)
	})
})
