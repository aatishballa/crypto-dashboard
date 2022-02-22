import { createStore } from "vuex";

// Create a new store instance.
export const store = createStore({
  state() {
    return {
      topGainers: [],
      topLooser: [],
      topTen: [],
    };
  },
  mutations: {
    setTopGainers(state, payload) {
      state.topGainers = payload;
    },
    setTopLoosers() {},
    setTopTen() {},
  },
  actions: {
    getCoins({commit}) {

    },
  },
});
