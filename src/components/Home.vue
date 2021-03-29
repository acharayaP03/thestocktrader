<template>
  <main class="flex-shrink-0">
    <div class="container text-left">
      <h1 class="mt-5">Trade or view your portfolio.</h1>
      <p class="lead">
        You may Save or Load your data and click on 'End Day' to begin a New day.
      </p>
      <p>Your Funds: {{ funds }}</p>
    </div>
  </main>
</template>

<script>
export default {
  name: "Home",
  components: {},
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
};
</script>
