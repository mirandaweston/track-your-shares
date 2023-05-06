<template>
  <div class="home-page">
    <h1>Stock Portfolio Tracker</h1>
    <div class="search-bar">
      <search-bar :value="searchQuery" @update="searchQuery = $event" />
    </div>
    <div class="create-portfolio">
      <button @click="createPortfolio">Create portfolio</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Ticker</th>
          <th>Price</th>
          <th>Change</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="stock in filteredStocks" :key="stock.ticker">
          <td>{{ stock.name }}</td>
          <td>{{ stock.ticker }}</td>
          <td>{{ stock.price }}</td>
          <td>{{ stock.change }}</td>
          <td>
            <div class="add button">
              <button @click="addToPortfolio(stock)">Add to portfolio</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <my-portfolios
      v-if="portfolioStocks.length"
      :portfolio-name="portfolioName"
      :portfolio-stocks="portfolioStocks"
    />
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import MyPortfolios from "../components/MyPortfolios.vue";

export default {
  name: "HomePage",
  components: {
    SearchBar,
    MyPortfolios,
  },
  data() {
    return {
      searchQuery: "",
      portfolioName: "",
      portfolioStocks: [],
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
  methods: {
    createPortfolio() {
      this.portfolioName = prompt("Enter the name of the portfolio:");
      this.portfolioStocks = [];
      alert("Created! Now you can start adding to " + this.portfolioName);
    },
    addToPortfolio(stock) {
      if (!this.portfolioName) {
        alert("Please first create a portfolio");
        return;
      }
      const shareInvestment = prompt("Enter amount to invest:");
      const investment = parseFloat(shareInvestment);
      if (isNaN(investment) || investment <= 0) {
        alert("Invalid input. Please enter a positive number.");
        return;
      }
      const stockWithInvestment = {
        ...stock,
        investment,
      };
      this.portfolioStocks.push(stockWithInvestment);
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
