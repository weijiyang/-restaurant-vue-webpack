const path = require("path")

module.exports = {
  entry : path.join(__dirname , "src/index.js"),
  output : {
    filename : "bundle.[name:8].js",
    path : path.join(__dirname , "dist")
  },
  module :[
    {
      test : /\.vue$/,
      loader : "vue-loader"
    }
  ]

}