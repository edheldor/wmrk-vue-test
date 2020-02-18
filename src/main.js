import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueApexCharts from 'vue-apexcharts'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueAxios, axios);
Vue.component('apexchart', VueApexCharts);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
