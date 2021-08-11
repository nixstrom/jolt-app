import React from "react"
import { useNavigation } from "@react-navigation/native"
import { NavigationProps } from "~types"
import { FloatingButton } from "~components/atoms/FloatingButton"

export const CreateNoteTrigger = () => {
	const navigation = useNavigation<NavigationProps>()

	return (
		<FloatingButton onPress={() => navigation.navigate("CreateNote")}>
			Create new
		</FloatingButton>
	)
}
