const path = require("path")
const miniCssPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry:{
        index: './src/index.js',
    },
    mode: 'development',
    module: {   
        rules: [{
            test: /\.css$/,
            use: [miniCssPlugin.loader, 'css-loader']
        }]
    },
    plugins: [
        new miniCssPlugin()
    ]
}
