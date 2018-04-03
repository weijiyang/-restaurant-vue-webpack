const path = require("path")
const webpack = require("webpack")
const HTMLPlugin = require("html-webpack-plugin")


module.exports = {
  entry : path.join(__dirname , "src/index.js"),
  output : {
    filename : "bundle.[hash:8].js",
    path : path.join(__dirname , "dist")
  },
  module :{
    rules : [
      {
        test : /\.vue$/,
        loader : "vue-loader"
      },
      {
        test : /\.styl$/,
        use : [
          "style-loader",
          "css-loader",
          "stylus-loader"
        ]
      },
      {
        test : /\.css$/,
        use : [
          "style-loader",
          "css-loader",
          {
            loader :"postcss-loader",
            options : {
              sourceMap : true 
            }
          }
        ]
      },
      {
        test : /\.(svg|gif|jpeg|png|jpg)$/,
        loader : "url-loader"
      }
    ]
  },
  devtool:"#cheap-module-eval-source-map",
  devServer : {
    port : "8000",
    host : "localhost",
    overlay : {
      errors :true
    },
    open : true,
    hot : true 
  },
  plugins:[
    new HTMLPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()

  ]

}