<template>
  <div class="reviews">
    <h1>Reviews Page</h1>

    <div class="reviews-container">
      <ReviewSummary />
      <ReviewSummary />
      <ReviewSummary />
      <ReviewSummary />
    </div>
  </div>
</template>

<script>
import ReviewSummary from '@/components/ReviewSummary.vue'
export default {
  name: 'Reviews',
  components: {
    ReviewSummary
  }
}
</script>

<style scoped lang="scss">
  .reviews {
    &-container {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
    }
  }
</style>
