const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

// keyword not allowed, therefore devtool
module.exports = merge(common, {
    devtool: 'inline-source-map',
    mode: 'development'
});