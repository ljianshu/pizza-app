import Vue from "vue"
import Vuex from "vuex"
import * as getters from "./getters"
import * as actions from "./actions"
import * as mutations from "./mutations"
Vue.use(Vuex)

export let store=new Vuex.Store({
  state:{
    menuItems:{},
    isLogin:false,
    currentUser:null
  },
  getters,
  mutations,
  actions
})
