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
          "css-loader"
        ]
      },
      {
        test : /\.(svg|gif|jpeg|png|jpg)$/,
        loader : "url-loader"
      }
    ]
  },
  plugins:[
    new HTMLPlugin()
  ]

}