const path = require('path');

module.exports = {
    entry:'./src/main.js',
    output:{
        path:path.join(__dirname, 'dist'),
        filename:'main.js'
    },
    devServer:{
        port:8080
    },
    
}