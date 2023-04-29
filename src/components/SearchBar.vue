<template>
  <div class="search-bar">
    <input
      type="text"
      :value="searchQuery"
      @input="$emit('update', $event.target.value)"
      placeholder="Search by name"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Search",
    },
  },
  data() {
    return {
      searchQuery: this.value,
    };
  },
  watch: {
    value(newVal) {
      this.searchQuery = newVal;
    },
  },
};
</script>

<style scoped>
.search-bar {
  margin-bottom: 1rem;
}
</style>
