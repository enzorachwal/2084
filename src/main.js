import Vue from 'vue'
import Buefy from 'buefy'
//import 'buefy/dist/buefy.css'
//import VueRouter from 'vue-router'
import '@/scss/main.scss';
import App from './App.vue'
import router from './router';

Vue.config.productionTip = false
Vue.use(Buefy)
//Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
