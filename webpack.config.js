const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/public/index.js'), 
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /.(js|jsx)$/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
              },
            },
            exclude: /node_modules/,
          },
          {
            test: /\.(sa|sc|c)ss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [{ loader: 'file-loader' }],
          },
        ]
    },
    mode: process.env.NODE_ENV,

    devServer: {
      publicPath: '/dist',
      proxy: {
        '/': 'http://localhost:3000',
      },
      hot: true,
    },
      resolve: {
        extensions: ['.js', '.jsx'],
      },
}
