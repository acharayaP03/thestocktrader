<template>
  <div class="col-sm-6 col-md-4">
    <div class="mb-3 text-white card">
      <div class="card-header bg-success">
        <h5 class="card-title">
          {{ stock.name }} <small>(Price: {{ stock.price | currency }})</small>
        </h5>
      </div>
      <div class="card-body">
        <div class="input-group">
          <input
            type="number"
            class="form-control"
            :id="stock.id"
            placeholder="Quantity...."
            v-model="quantity"
            :class="{ danger: insufficientFunds }"
          />
          <button
            class="btn btn-success"
            @click="buyStock"
            :disabled="insufficientFunds || +quantity <= 0 || !Number.isInteger(+quantity)"
          >
            {{ insufficientFunds ? "Insufficient Funds " : "Buy" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0,
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    },
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        quantity: +this.quantity,
        stockPrice: this.stock.price,
      };

      console.log(order);
      this.$store.dispatch("buyStocks", order);
      this.quantity = 0;
    },
  },
};
</script>
<style scoped>
.danger {
  border: 1px solid red;
}
</style>
