<template>
  <div class="col-sm-6 col-md-4">
    <div class="mb-3 text-white card">
      <div class="card-header bg-success">
        <h5 class="card-title">
          {{ stock.name }} <small>(Price: {{ stock.price }}) | Quantity: {{ stock.quantity }} </small>
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
          />
          <button class="btn btn-success" @click="sellStock" :disabled="quantity <= 0">
            Sell
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  props: {
    stock: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    ...mapActions(['sellStocks']),
    
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockQuantity: this.quantity,
        stockPrice: this.stock.price,
      };
      this.$store.dispatch('sellStocks', order)
    },
  },
};
</script>
