import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

export type Note = {
	id: string
	body: string
	createdAt: number
	pinned: boolean
}

export type RootStackParamList = {
	Notes: undefined
	CreateNote: undefined
}

export type NavigationProps = StackNavigationProp<RootStackParamList>

// accepts any key from RootStackParamList and returns the props & params for that screen
export type ScreenProps<RouteName extends keyof RootStackParamList> = {
	navigation: StackNavigationProp<RootStackParamList, RouteName>
	route: RouteProp<RootStackParamList, RouteName>
}
