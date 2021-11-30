module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      '^/api': {
        target: 'https://2086backend.juancosta.repl.co',
        ws: true,
        changeOrigin: true
      },
    }    
  }
};