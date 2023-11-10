module.exports = {
  publicPath: '/resume/',

  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/styles/_var.scss";`,
      },
    },
  },

  devServer: {
    public: 'http://localhost:8080/resume/',
    disableHostCheck: true,
  },

};
