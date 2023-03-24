const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'client/src/index.js'),
		},
		hot: true,
		open: true,
		port: 3000
	},
	entry: path.resolve(__dirname, 'client/src/index.js'),
	output: {
		filename: 'bundle.min.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new htmlWebpackPlugin({
			content: 'Patrickkkk',
			filename: 'index.html',
			template: path.resolve(__dirname, 'client/views/index.html')
		})
	]
}