<template>
  <div class="search-bar">
    <label class="search-bar-label" for="game-search">Search review</label>
    <input id="game-search" class="search-bar-input" placeholder="Search Review" type="text">
  </div>
</template>

<script>
export default {
  name: 'Search Bar',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
  .search-bar {
    width: 100%;
    &-label {
      display: none;
    }
    &-input {
      width: 100%;
      height: 40px;
      padding: 5px;
      box-sizing: border-box;
      border: 1px solid $primary-colour;
      border-radius: 5px;
      font-weight: 400;
      font-size: 16px;
    }
  }
</style>
