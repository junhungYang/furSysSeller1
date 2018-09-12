import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store/store'
import '../static/reset.css'
import "../mock/index"
Vue.config.productionTip = false
// import wechat from './js/wechat'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
// wechat.getOpenid(() => {
//   new Vue({
//     el: '#app',
//     router,
//     template: '<App/>',
//     components: { App }
//   })
//   wechat.setWxConfig({
//     jsApiList: ['scanQRCode', 'translateVoice', 'checkJsApi', 'chooseWXPay', 'onMenuShareAppMessage', 'onMenuShareTimeline', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
//   })
// })