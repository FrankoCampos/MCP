import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import vuetify from './plugins/vuetify';
import axios from 'axios';

Vue.config.productionTip = false
//https://cgyp.herokuapp.com/api
axios.defaults.baseURL = "http://localhost:3030/api"

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
