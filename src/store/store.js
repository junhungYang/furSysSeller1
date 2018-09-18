import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loginErrorState: false,
    goodsSuccessState: false,
    goodsErrorState: false,
    customerName: "",
    shopName: "",
    customerCode: "",
    goodsList: [], //待定
    firstDate: '',
    lastDate: ''
  },
  mutations: {
    changeDate(state, payload) {
      if(payload.index === 3) {
        state.firstDate = payload.dateStr
        state.lastDate = payload.dateStr
        return
      }
      let dateObj = payload.date;
      let month = `${dateObj.getMonth() + 1}`;
      let year = dateObj.getFullYear();
      let date = `${dateObj.getDate()}`;
      if (month.length === 1) {
        month = 0 + month
      }
      if (date.length === 1) {
        date = 0 + date
      }
      let dateStr = `${year}-${month}-${date}`
      if (payload.index === 0) {
         state.firstDate = dateStr
      } else if (payload.index === 1) {
        state.lastDate = dateStr
      }
    },
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
    customerInfoInit(state, payload) {
      if (payload) {
        state.customerName = payload.customerName;
        state.shopName = payload.shopName;
        state.customerCode = payload.customerCode;
      } else {
        state.customerName = "";
        state.shopName = "";
        state.customerCode = "";
      }
    },
    goodsListInit(state,payload) {
      state.goodsList = payload;
    }
  }
});
