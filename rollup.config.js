// rollup.config.mjs
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
	input: 'views/editor/graficos.js',
	output: {
		file: 'public/bundle.js',
		format: 'cjs'
	},
	plugins: [
		nodeResolve({
		  extensions: ['.mjs', '.js', '.json', '.node']
		}),commonjs({extensions: ['.mjs', '.js', '.json', '.node']})
		// ... outros plugins
	  ]
};
