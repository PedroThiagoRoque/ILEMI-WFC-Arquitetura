// rollup.config.mjs
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import resolve from "@rollup/plugin-node-resolve";

export default [ 
	/*input: 'views/editor/graficos2.js',
	output: {
		file: 'public/bundle.js',
		format: 'cjs'
	},
	plugins: [
		nodeResolve({
		  extensions: ['.mjs', '.js', '.json', '.node']
		}),commonjs({extensions: ['.mjs', '.js', '.json', '.node']})
		// ... outros plugins
	  ]*/

	  buildConfig('views/editor/graficos2.js', 'bundle'),
	  buildConfig('public/exportador.js', 'bundle2'),
	];

function buildConfig(inputFileName, outputFileName) {
	return {input: `${inputFileName}`,
	output: [
	  {
		format: "esm",
		file: "public/"+outputFileName+".js",
	  },
	],
	plugins: [resolve()],
	}
  };

