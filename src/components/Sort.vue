<template>
  <div class="sort">
    <label class="sort-label" for="sort">
      Sort by
    </label>
    <select v-model="selected" class="sort-select" id="sort" name="sort">
      <option v-for="item in sortData" :value="item" :key="item">{{ item }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Sort',
  props: {
    sortData: Array,
    selected: String
  }
}
</script>

<style scoped lang="scss">
  .sort {
    width: 100%;
    &-label {
      display: none;
    }
    &-select {
      width: 100%;
      height: 40px;
      padding: 5px;
      border: 1px solid $primary-colour;
      border-radius: 5px;
      font-weight: 400;
      font-size: 16px;
    }
  }
</style>
