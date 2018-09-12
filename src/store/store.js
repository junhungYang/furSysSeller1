import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
         state: {
           loginErrorState: false,
           goodsSuccessState: false,
           goodsErrorState: false,
           customerName:'',
           shopName:'',
           customerCode:'',
           goodsList:[]
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
           },
           customerInfoInit(state,payload) {

               if(payload) {
                   state.customerName = payload.customerName
                   state.shopName = payload.shopName
                   state.customerCode = payload.customerCode
                   console.log(state.customerName, state.shopName, state.customerCode);
                   //state.goodsList = ['需确认','需确认','需确认']
               }else {
                   state.customerName = ''
                   state.shopName = ''
                   state.customerCode = ''
                   state.goodsList = []
               }
           }
         }
       });
