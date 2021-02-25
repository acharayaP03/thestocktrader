import stocks from '../../data/stocks';

const state ={
  stocks: []
}

const mutations = {
  'SET_STOCKS'(state, stocks) {
    state.stocks = stocks
  },
  'RND_STOCKS'(){

  }
}

const actions ={
  buyStocks: ({ commit }) =>{
    commit();
  },
  setStocks: ({ commit })=>{
    //stocks is the data that we are receiveing from data/stocks.js
    commit('SET_STOCKS', stocks);
  },
  randomizeStocks: ( { commit }) =>{
    commit('RND_STOCKS');
  }
}

const getters ={
  stocks: state =>{
    return state.stocks;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}