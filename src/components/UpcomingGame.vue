<template>
  <div class="upcoming-game">
    <div class="upcoming-game-image-box">
      <img class="upcoming-game-image" :src="gameImage" />
    </div>
    <div class="upcoming-game-details">
      <h3 class="upcoming-game-title">{{ gameTitle }}</h3>
      <span class="upcoming-game-release-date">{{ gameReleaseDate }}</span>
      <span class="upcoming-game-description">{{ gameDescription }}</span>
      <div class="upcoming-game-platforms">
        <Platforms :isPlatforms="gamePlatforms" />
      </div>
    </div>
  </div>
</template>

<script>
// Import components
import Platforms from '@/components/Platforms.vue'

export default {
  name: 'ReviewList',
  props: {
    gameImage: {
      type: String
    },
    gameTitle: {
      type: String
    },
    gameReleaseDate: {
      type: String
    },
    gameDescription: {
      type: String
    },
    gamePlatforms: {
      type: Array
    }
  },
  components: {
    Platforms
  }
}
</script>

<style scoped lang="scss">
  .upcoming-game {
    width: 100%;
    display: flex;
      &-image {
        width: 6em;
        height: 100%;
      }
      &-details {
        display: flex;
        flex-direction: column;
        padding-left: 9px;
        flex-grow: 1;
        & div {
          margin-top: auto;
        }
      }
      &-title {
        font-size: 1.3em;
      }
      &-release-date {
        padding-bottom: 10px;
      }
      &-description {
        display: none;
      }
      &-platforms {
        display: flex;
      }
  }
  @media (min-width: $small-breaking-point) {
    .upcoming-game {
      &-details {
        padding-left: 20px;
      }
      &-image {
        height: 100%;
        &-box{
          display: block;
        }
      }
    }
  }
  @media (min-width: $medium-breaking-point) {
    .upcoming-game {
      &-image {
        width: 8em;
        &-box{
          display: block;
        }
      }
      &-description {
        display: block;
        font-size: 0.8em;
      }
    }
  }
  @media (min-width: $large-breaking-point) {
    .upcoming-game {
      &-image {
        width: 8em;
        &-box{
          display: block;
        }
      }
    }
  }
</style>
