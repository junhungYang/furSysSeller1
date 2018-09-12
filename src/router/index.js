import Vue from 'vue'
import Router from 'vue-router'
import login from "@/components/login"
import sellMod from "@/components/sellMod"
import sellRecord from '@/components/sellRecord'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      component: login
    },
    {
      path: "/login",
      component: login
    },
    {
      path: "/sellMod",
      name:"sellMod",
      component: sellMod
    },
    {
      path: "/sellRecord",
      component: sellRecord
    }
  ]
});
