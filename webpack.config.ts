import path from "path";
import { type Configuration } from "webpack";
import nodeExternals from "webpack-node-externals";

const { NODE_ENV } = process.env;

const config: Configuration = {
  entry: "./src/server.ts",
  externals: [nodeExternals()],
  mode: NODE_ENV === "production" ? "production" : "development",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        // include: [path.resolve(__dirname, 'src')],
        loader: "ts-loader",
        options: {},
        test: /\.(ts|js)$/i,
      },
    ],
  },
  optimization: {
    moduleIds: "deterministic",
    splitChunks: {
      chunks: "all",
    },
  },
  output: {
    clean: true,
    filename: "index.js",
    path: path.join(__dirname, "dist"),
  },
  plugins: [],
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src/"),
    },
    extensions: [".ts", ".js"],
  },
  target: "node",
};

// eslint-disable-next-line import/no-default-export
export default config;
