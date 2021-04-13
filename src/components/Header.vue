<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark rounded" aria-label="Navigation Bar">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Stock Trader</router-link>

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/portfolio" activeClass="active" class="nav-link">Portfolio</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/stocks" activeClass="active" class="nav-link">Stocks</router-link>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right dropdown">
        <li class="nav-item"><a href="#" class="nav-link" @click="endDay">End Day</a></li>
        <li class="nav-item">
          <a
            class="nav-link dropdown-toggle float-right"
            href="#"
            id="dropdownMenu"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            >Dropdown</a
          >
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <strong class="text-white navbar-nav navbar-right">Funds: {{ funds | currency }}</strong>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
  methods: {
    ...mapActions(["randomizeStocks"]),
    endDay() {
      return this.randomizeStocks();
    },
  },
};
</script>
