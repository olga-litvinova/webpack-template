module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js'
    },
    mode: 'development',
    module: {
        rules:[
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,       
                type: 'asset/resource',
            },

            {

                test: /\.(csv|tsv)$/i,
        
                use: ['csv-loader'],
        
              },
        
              {
        
                test: /\.xml$/i,
        
                use: ['xml-loader'],
        
              },
        ]
    }
}
