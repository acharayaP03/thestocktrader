<template>
  <div class="col-sm-6 col-md-4">
    <div class="mb-3 text-white card">
      <div class="card-header bg-success">
        <h5 class="card-title">{{stock.name}} <small>(Price: {{stock.price}})</small></h5>
      </div>
      <div class="card-body">
        <div class="input-group">
          <input type="number" class="form-control" id="password" placeholder="Quantity...." v-model="quantity"/>
          <button class="btn btn-success" @click="buyStock">Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    stock:{
      type: Object,
      required: true
    }
  },
  data(){
    return{
      quantity: 0
    }
  },
  methods:{
    buyStock(){

      const order = {
        stockId: new Date().toISOString(),
        stockQuantity: this.quantity,
        stockPrice: this.stock.price
      }

      console.log(order);
      this.quantity = 0
    }
  }
}
</script>
