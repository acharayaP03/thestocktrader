<template>
  <div class="col-sm-6 col-md-4">
    <div class="mb-3 text-white card">
      <div class="card-header bg-info">
        <h5 class="card-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price | currency }}) | Quantity: {{ stock.quantity }} </small>
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
            :class="{ danger: insufficientQuantity }"
          />
          <button
            class="btn btn-success"
            @click="sellStock"
            :disabled="insufficientQuantity || +quantity <= 0 || !Number.isInteger(+quantity)"
          >
            {{ insufficientQuantity ? "Insufficient Quantity" : "Sell" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
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
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    },
  },
  methods: {
    ...mapActions({
      sellingStock: "sellStock",
    }),

    sellStock() {
      const order = {
        stockId: this.stock.id,
        quantity: +this.quantity,
        stockPrice: this.stock.price,
      };
      this.sellingStock(order);
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
