// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const nodeExternals = require('webpack-node-externals');

const {
    NODE_ENV = 'production',
  } = process.env;


module.exports = {
    entry: './src/server.ts',
    mode: NODE_ENV,
    target: "node",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        clean: true,
    },
    plugins: [
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.ts$/i,
                loader: 'ts-loader',
                include: [path.resolve(__dirname, 'src')],
                exclude: /node_modules/,
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            "@src": path.resolve(__dirname, 'src/')
        }
    },
    externals: [nodeExternals()],
    watch: NODE_ENV === 'development',
};