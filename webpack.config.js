module.exports = {
    mode: "production",
    entry: "./main.css",
    module: {
        rules: [
            {
                test: /\.css$/,
                loaders: [
                    "file-loader",
                    "extract-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            importLoaders: 1
                        }
                    }
                ]
            },
        ]
    }
};
