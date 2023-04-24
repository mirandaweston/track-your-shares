<template>
  <div class="create-portfolio"></div>
  <div v-if="portfolioStocks.length">
    <h2 style="text-align: left">{{ portfolioName }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    portfolioName: {
      type: String,
      default: "",
    },
    portfolioStocks: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped></style>
