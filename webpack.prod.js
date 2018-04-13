
const path = require('path');

module.exports = {
    entry: {
        'omgdom-completelly-load': path.resolve(__dirname, 'src/lib/omgdom-completelly-load.js')
    },
    output: {
        path: path.resolve(__dirname, 'src/dist'),
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname, 'src/client/private')]
            }
        ]
    },
    plugins: [
        
    ],
    target: 'web'
};
