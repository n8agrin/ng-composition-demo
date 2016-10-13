// var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'./index.js'
	],
	output: {
		path: './build',
		pathinfo: true,
		filename: 'static/js/bundle.js'
	},
	plugins: [
	  new HtmlWebpackPlugin({
      inject: true,
      template: './index.html'
    })
	]
}