const state = {
  funds: 10000,
  stocks: [],
};

const mutations = {
  BUY_STOCKS(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find((item) => item.id == stockId);
    //if there is already a record of the stocks then update its quantity
    if (record) {
      record.quantity += quantity;
    } else {
      //if stock does not exist then push new stock into the state.
      state.stocks.push({
        id: stockId,
        quantity: quantity,
      });
    }
    //then decrease the funds
    state.funds -= stockPrice * quantity;
  },
  SELL_STOCK(state, payload) {
    const record = state.stocks.find((item) => item.id == payload.stockId);
    //if quantity is greater
    if (record.quantity > payload.quantity) {
      record.quantity -= payload.quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += payload.stockPrice * payload.quantity;
  },
};

const actions = {
  sellStock({ commit }, order) {
    commit("SELL_STOCK", order);
  },
};

const getters = {
  //injecting getters from stocks
  stockPortfolio(state, getters) {
    return state.stocks.map((stock) => {
      const record = getters.stocks.find((item) => item.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price,
      };
    });
  },
  funds(state) {
    return state.funds;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
