import React from "react"
import { Button as RNUIButton, ButtonProps } from "react-native-ui-lib"

type Props = {
	children: string
	onPress: ButtonProps["onPress"]
}

export const Button = ({ children, onPress }: Props) => (
	<RNUIButton label={children} onPress={onPress} />
)
