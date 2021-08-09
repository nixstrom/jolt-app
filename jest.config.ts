import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
	rootDir: ".",
	verbose: true,
	preset: "react-native",
	testPathIgnorePatterns: ["<rootDir>/node_modules"],
	moduleFileExtensions: ["js", "ts", "tsx"],
}
export default config
