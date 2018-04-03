import webpack from 'webpack';
import path from 'path';

export default {
  mode: 'development',
  devtool: 'inline-source-map',
  context: __dirname, // path.resolve(__dirname, 'src/index'),
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    noInfo: false
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin() // This supersedes the (now deprecated) webpack 1 plugin NoErrorsPlugin. 
  ],
  module: {
    rules: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), use: 'babel-loader'},
      {test: /(\.css)$/, use: [{ loader: 'style-loader'}, { loader: 'css-loader'}]},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader'},
      {test: /\.(woff|woff2)$/, use: 'url-loader?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};