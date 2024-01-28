// rollup.config.mjs
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
	input: 'views/editor/graficos.js',
	output: {
		file: 'public/bundle.js',
		format: 'cjs'
	},
	plugins: [nodeResolve()]
};
