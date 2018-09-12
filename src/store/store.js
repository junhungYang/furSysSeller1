import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
         state: {
           loginErrorState: false,
           goodsSuccessState: false,
           goodsErrorState: false
         },
         mutations: {
           loginErrorManage(state) {
             state.loginErrorState = !state.loginErrorState;
           },
           goodsSuccessaManage(state, payload) {
             payload
               ? (state.goodsSuccessState = true)
               : (state.goodsSuccessState = false);
           },
           goodsErrorManage(state, payload) {
             payload
                 ? (state.goodsErrorState = true)
                 : (state.goodsErrorState = false);
           }
         }
       });
