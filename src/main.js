import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store/store'
import {DatePicker} from 'element-ui'
import '../static/reset.css'
import "../mock/index"
Vue.config.productionTip = false
Vue.component(DatePicker.name,DatePicker)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})