import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebar: false,
  },
  mutations: {
    TOGGLE_SIDEBAR(state) {
      state.sidebar = !state.sidebar;
    },
  },
  actions: {},
  modules: {},
});
