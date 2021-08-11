import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, View, ViewProps } from "react-native"

type Props = {
	children: React.ReactNode[]
	style?: ViewProps["style"] | any
}

export const PrimaryView = ({ children, style = {} }: Props) => (
	<View style={{ ...styles.container, ...style }}>
		<StatusBar style="auto" />
		{children}
	</View>
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
})
