import { createApp } from 'vue'
import App from './App.vue'
// import Vue from "vue";
import HighchartsVue from "highcharts-vue";

createApp(App).mount('#app')
App.use(HighchartsVue);

// Vue.use(HighchartsVue);