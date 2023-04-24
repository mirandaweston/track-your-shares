<template>
  <div class="home-page">
    <h1>Stocks</h1>
    <div class="search-bar">
      <search-bar :value="searchQuery" @update="searchQuery = $event" />
    </div>
    <div class="create-portfolio">
      <button @click="createPortfolio">Create portfolio</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="stock in filteredStocks" :key="stock.ticker">
          <td>{{ stock.name }}</td>
          <td>{{ stock.ticker }}</td>
          <td>{{ stock.price }}</td>
          <td>{{ stock.change }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import CreatePortfolio from "../components/CreatePortfolio.vue";

export default {
  components: {
    SearchBar,
    CreatePortolio,
  },
  data() {
    return {
      searchQuery: "",
      stocks: [
        { name: "Apple Inc.", ticker: "AAPL", price: 135.75, change: -0.25 },
        {
          name: "Microsoft Corporation",
          ticker: "MSFT",
          price: 255.85,
          change: 1.2,
        },
        {
          name: "Amazon.com, Inc.",
          ticker: "AMZN",
          price: 3312.0,
          change: -5.5,
        },
        { name: "Tesla, Inc.", ticker: "TSLA", price: 725.25, change: 2.1 },
        {
          name: "Alphabet Inc.",
          ticker: "GOOGL",
          price: 2267.5,
          change: -0.75,
        },
      ],
    };
  },
  computed: {
    filteredStocks() {
      return this.stocks.filter((stock) => {
        const query = this.searchQuery.toLowerCase();
        return (
          stock.name.toLowerCase().includes(query) ||
          stock.ticker.toLowerCase().includes(query)
        );
      });
    },
  },
};
</script>

<style scoped>
.home-page {
  margin: 2rem;
}

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

.create-portfolio {
  text-align: right;
  padding: 10px;
}

.search-bar {
  text-align: left;
  margin-bottom: -32px;
}

tr:hover {
  background-color: #f5f5f5;
}
</style>
