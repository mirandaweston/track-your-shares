<template>
  <div class="create-portfolio"></div>
  <div v-if="portfolioStocks.length">
    <h2 style="text-align: left">{{ portfolioName }}</h2>
  </div>
  <table>
    <thead>
      <tr>
        <th>Company</th>
        <th>Ticker</th>
        <th>Price</th>
        <th>Investment (£)</th>
        <th>Share</th>
        <th>Change</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="stock in portfolioStocks" :key="stock.ticker">
        <td>{{ stock.name }}</td>
        <td>{{ stock.ticker }}</td>
        <td>{{ stock.price }}</td>
        <td>{{ stock.investment }}</td>
        <td>{{ (stock.price / stock.investment).toFixed(2) }}</td>
        <td>{{ stock.change }}</td>
      </tr>
    </tbody>
  </table>
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

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 0.5rem;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

th {
  background-color: #eee;
}
</style>
