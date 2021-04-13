import stocks from "../../data/stocks";

const state = {
  stocks: [],
};

const mutations = {
  SET_STOCKS(state, stocks) {
    state.stocks = stocks;
  },
  RND_STOCKS() {
    state.stocks.forEach((stock) => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
  },
};

const actions = {
  buyStocks: ({ commit }, order) => {
    //BUY_STOCKS reffers to the global name space of portfolio.
    //note: store is available across the applications and can be accessed from anywhere.
    commit("BUY_STOCKS", order);
  },
  setStocks: ({ commit }) => {
    //stocks is the data that we are receiveing from data/stocks.js
    commit("SET_STOCKS", stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit("RND_STOCKS");
  },
};

const getters = {
  stocks: (state) => {
    return state.stocks;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
