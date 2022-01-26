import Vue from 'vue'
import Vuex from 'vuex'
import cartModules from '@/store/modules/cart'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart: cartModules,
  },
})
