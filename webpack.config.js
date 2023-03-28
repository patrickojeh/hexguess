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
		clean: true,
		filename: 'bundle.[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: '[name][ext]'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(png|jpg|jpeg|svg|gif)$/i,
				type: 'asset/resource'
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, 'client/views/index.html')
		})
	]
}