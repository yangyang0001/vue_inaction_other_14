import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from '@/router/index.js'
import '@/assets/css/bootstrap.css'
import '@/index.css'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:8888/';
Vue.prototype.axios = axios;

new Vue({
    render: h => h(App),
    router: router
}).$mount('#app')
