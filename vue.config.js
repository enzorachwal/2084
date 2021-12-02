module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      '^/api': {
        target: 'https://testedjango.robsonjoo.repl.co',
        ws: true,
        changeOrigin: true
      },
    }    
  }
};