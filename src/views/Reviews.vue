<template>
  <div class="reviews">
    <div class="reviews-bar">
      <h1>Reviews</h1>
      <div class="reviews-filter">
        <div class="reviews-filter-search">
          <SearchBar />
        </div>
        <div class="reviews-filter-sort">
          <Sort
            :sortData="sort.filter"
            :selected="sort.selectedSort"
          />
        </div>
      </div>
    </div>
    <hr />
    <ReviewList />
  </div>
</template>

<script>
// Import components
import SearchBar from '@/components/SearchBar.vue'
import Sort from '@/components/Sort.vue'
import ReviewList from '@/components/ReviewList.vue'

export default {
  name: 'Reviews',
  components: {
    SearchBar,
    Sort,
    ReviewList
  },
  data () {
    return {
      sort: {
        filter: [
          'Most Recent',
          'Highest Reviewed',
          'Lowest Reviewed',
          'A-Z',
          'Z-A'
        ],
        selectedSort: 'Most Recent'
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .reviews {
    margin-top: 0;
    &-bar {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
    }
    &-filter {
      display: flex;
      flex-direction: column;
      padding-bottom: 12px;
      width: 100%;
      &-search {
        width: 100%;
      }
      &-sort {
        width: 100%;
        min-width: 160px;
        margin-top: 10px;
      }
    }
  }
  @media (min-width: $medium-breaking-point) {
    .reviews {
      &-bar {
        display: flex;
        align-items: center;
        flex-direction: row;
      }
      &-filter {
        display: flex;
        flex-direction: row;
        padding-bottom: 0;
        width: 50%;
        &-search {
          width: 60%;
          margin-right: 12px;
        }
        &-sort {
          width: 40%;
          margin-top: 0;
        }
      }
    }
  }
  @media (min-width: $large-breaking-point) {
    .reviews {
      margin-top: 2em;
    }
  }
</style>
