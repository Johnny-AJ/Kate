import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalAll: ''
  },
  mutations: {
    setTotalAll: (state, id) => {
      state.totalAll = totalAll
    }
  },
  actions: {
  },
  modules: {
  }
})
