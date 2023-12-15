import resolve from "@rollup/plugin-node-resolve";

export default [
	//buildConfig('app.js', 'bundle'),
	buildConfig('views/matriz/matriz.js', 'matriz'),  
]

function buildConfig(inputFileName, outputFileName) {
	return {
		input: `${inputFileName}`,
  output: [
    {
      format: "esm",
      file: "public/bundle.js",
    },
  ],
  plugins: [resolve()],
  }
};