<template>
  <div class="home-page">
    <h1>Stocks</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
          <th>Change</th>
        </tr>
      </thead>
    </table>
  </div>
</template>

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

tr:hover {
  background-color: #f5f5f5;
}
</style>
