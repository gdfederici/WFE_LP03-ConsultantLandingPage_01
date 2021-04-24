const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    // IT_ Guarda i file e ricompila ogni volta che cambiano.
    // EN_ Watch files and recompile whenever they change.
    watch: true,
    // IT_ File Javascript di entrata pre-compilato.
    // EN_ Pre-compiled entry Javascript file.
    entry: './src/scripts/index.js',
    // IT_ Mappe di origine a supporto del mode development.
    // EN_ Source maps to help mode development.
    devtool: 'inline-source-map',
    plugins: [
        // EN_ Generate an HTML file.
        new HtmlWebpackPlugin()
    ],
    // IT_ Cartella di output per i file compilati e nome del file Javascript.
    // EN_ Output folder for compiled files and Javascript filename.
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            // EN_ Loader -> CSS + SCSS.
            {
                test: /\.s[ac]ss$/,
                use: [
                    // IT_ Crea i nodi style dal JS.
                    // EN_ Creates `style` nodes from JS strings.
                    "style-loader",
                    // IT_ Traduce CSS in CommonJS + generazione di mappe sorgente. 
                    // EN_ Translates CSS into CommonJS + generation of source maps.
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    // IT_ Compila Sass to CSS + generazione di mappe sorgente.
                    // EN_ Compiles Sass to CSS + generation of source maps.
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
                generator: { filename: 'css/[name][ext]' }
            },
            // EN_ Loader -> fonts.
            {
                test: /\.(woff|woff2)$/,
                type: 'asset/resource',
                generator: { filename: 'fonts/[name][ext]' }
            },
            // EN_ Loader -> images.
            {
                test: /\.(jpg|png|svg)$/,
                type: 'asset',
                generator: { filename: 'img/[name][ext]' }
            }
        ]
    }
}