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
        host: 'localhost',
        port: 8080,
        // "Content not from Webpack is served from...":
        contentBase: path.join(__dirname, '/'), 
        // enable HMR on the devServer
        hot: true,
        // fallback to root for other urls
        historyApiFallback: true,
        inline: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        proxy: {
          '/': {
             target: 'http://localhost:3000/',
            secure: false,
           },
        },
      },
      resolve: {
        extensions: ['.js', '.jsx'],
      },
}
