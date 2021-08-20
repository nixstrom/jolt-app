import React from "react"
import { render, fireEvent } from "@testing-library/react-native"
import { Button } from "./Button"

const initialProps = {
	children: "Hello!",
	onPress: () => {},
}

const setup = (props: Partial<React.ComponentProps<typeof Button>>) =>
	render(<Button {...initialProps} {...props} />)

// This doesn't work - but it does work perfectly with normal RN components
// https://github.com/nixstrom/jolt-app/issues/4
describe.skip("<Button />", () => {
	it("will show the button title", async () => {
		const { findByText } = setup({ children: "Hello, World!" })

		const button = await findByText("Hello, World!")

		expect(button).toBeTruthy()
	})

	it("will execute a handler when pressed", async () => {
		const onPress = jest.fn()
		const { findByText } = setup({ onPress })

		expect(onPress).not.toHaveBeenCalled()

		const button = await findByText("Hello!")

		fireEvent(button, "press")

		expect(onPress).toHaveBeenCalledTimes(1)
	})
})
