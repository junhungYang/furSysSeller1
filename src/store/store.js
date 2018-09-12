import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        loginErrorState: false
    },
    mutations: {
        loginErrorManage(state) {
            state.loginErrorState = !state.loginErrorState
        }
    }
})