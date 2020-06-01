import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    answers: {
      sex: "",
      birthday: {
         year: 0,
         month: 0,
         day: 0,
      },
      insurance: "",
      hospitalized_now: "",
      hospitalized_past: "",
      consultation: "",
    },
  },
  mutations: {
    updateAnswers(state, updateObject) {
      state.answers = Object.assign({}, state.answers, updateObject);
    },
  },
  actions: {
    updateAnswers({ commit }, updateObject) {
      commit('updateAnswers', updateObject);
    }
  },
  modules: {
  }
})
