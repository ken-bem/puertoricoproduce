import Vue from 'vue'
import router from './router';
import App from './App.vue'
import axios from 'axios';
import './utils/filters'

let http = axios.create({
  baseURL: "https://www.puertoricoproduce.com/blog/wp-json/wp/v2/"
});

Vue.prototype.$http = http;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
