import Vue from 'vue'
import App from './App.vue'
import router from '@/router.js'
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
// import jQuery from 'jquery'
// window.$ = window.jQuery = jQuery
export const bus = new Vue()

Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
