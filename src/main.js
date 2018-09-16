import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store/store'
import {DatePicker} from 'element-ui'
import '../static/reset.css'
import "../mock/index"
import domain from "./domain.js";
import axios from 'axios'
import wechat from "./api/wechat";
global.domain = domain;
Vue.config.productionTip = false
Vue.component(DatePicker.name,DatePicker)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})

axios.post(`${domain.testUrl}share/index`,{
  url: location.href
},{
headers:{
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}).then((res) => {
   wechat.configParam = res.data.data
   wechat.configParam.debug = false
   wechat.setWxConfig({
     jsApiList: ['scanQRCode', 'translateVoice', 'checkJsApi']
   })
})

