module.exports = function (api) {
	api.cache(true)
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			[
				"module-resolver",
				{
					root: ["./src"],
					alias: {
						"^~(.+)": "./src/\\1",
					},
					extensions: [".json", ".tsx", ".ts"],
				},
			],
		],
	}
}
