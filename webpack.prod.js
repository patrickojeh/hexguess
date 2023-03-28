const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'production',
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
				test: /\.(scss|css)$/,
				use: ['style-loader', miniCSSExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			{
				test: /\.(png|jpg|jpeg|svg|gif|ttf|woff)$/i,
				type: 'asset/resource'
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, 'client/views/index.html')
		}),
		new miniCSSExtractPlugin()
	]
}