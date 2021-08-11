import React from "react"
import {
	FloatingButton as RNUIFloatingButton,
	ButtonProps,
} from "react-native-ui-lib"

type Props = {
	children: string
	onPress: ButtonProps["onPress"]
}

export const FloatingButton = ({ children, onPress }: Props) => (
	<RNUIFloatingButton
		visible
		button={{
			onPress,
			label: children,
		}}
	/>
)
