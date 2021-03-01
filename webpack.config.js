const path = require('path');
module.exports = {
    mode: 'production',
    entry: './app/src/index.js',
    output: {
        path: path.resolve(__dirname, 'app/dist'),
        filename: 'index.js'
    },
    module:{},
    resolve:{},
    devServer:{}
}