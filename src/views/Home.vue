<template>
  <div class="home">
    <div class="home-panel-one">
      <section class="home-section-one">
        <h1>Latest Reviews</h1>
        <hr />
        <LatestReviews />
      </section>
      <section class="home-section-two">
        <h1>Next 5 Upcoming Games</h1>
        <hr />
        <MiniGamesSoon />
      </section>
    </div>
  </div>
</template>

<script>
// Import components
import LatestReviews from '@/components/ReviewList.vue'
import MiniGamesSoon from '@/components/MiniGamesSoon.vue'

export default {
  name: 'Home',
  components: {
    LatestReviews,
    MiniGamesSoon
  }
}
</script>

<style scoped lang="scss">
  .home {
    &-panel-one {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      width: 100%;
    }
    &-section-one {
      width: 100%
    }
    &-section-two {
      width: 100%
    }
  }
  @media (min-width: $large-breaking-point) {
    .home {
      &-panel-one {
        flex-direction: row;
      }
      &-section-one {
        width: 60%
      }
      &-section-two {
        width: 35%
      }
    }
  }
</style>
