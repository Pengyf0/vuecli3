module.exports = {
  devServer: {
      proxy: {
          '/joke': {
              target: 'https://api.apiopen.top',
              changeOrigin: true,//是否跨域
              ws: false,//是否开启proxy websokets
              pathRewrite: {
                '^/joke': ''
              }
          }
      }
  },
  css:{
    loaderOptions:{
      sass:{
        prependData:`@import "~@/assets/css/common.scss";`
      }
    }
  }
}