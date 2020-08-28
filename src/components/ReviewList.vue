<template>
  <ol class="review-list">
    <!-- Review 1 -->
    <li class="review-list-item">
      <div class="review-list-image-box">
        <img class="review-list-image" src="https://howlongtobeat.com/games/38061_Death_Stranding.png" />
      </div>
      <div class="review-list-details">
        <h2 class="review-list-title">Death Stranding</h2>
        <span class="review-list-release-date">26 October 2019</span>
        <span class="review-list-description">From legendary game creator Hideo Kojima comes an all-new, genre-defying experience. Sam Bridges must brave a world utterly transformed by the Death Stranding.</span>
        <div class="review-list-platforms">
          <Platforms />
        </div>
      </div>
      <div class="review-list-score">
        <ReviewScore />
      </div>
    </li>
    <!-- Review 2 -->
    <li class="review-list-item">
      <div class="review-list-image-box">
        <img class="review-list-image" src="https://howlongtobeat.com/games/41753_The_Last_of_Us_Part_II.jpg" />
      </div>
      <div class="review-list-details">
        <h2 class="review-list-title">The Last Of Us Part 2</h2>
        <span class="review-list-release-date">04 Decemeber 2019</span>
        <span class="review-list-description">The Last of Us Part II is a 2020 action-adventure game developed by Naughty Dog and published by Sony Interactive Entertainment for the PlayStation 4.</span>
        <div class="review-list-platforms">
          <Platforms />
        </div>
      </div>
      <div class="review-list-score">
        <ReviewScore />
      </div>
    </li>
    <!-- Review 3 -->
    <li class="review-list-item">
      <div class="review-list-image-box">
        <img class="review-list-image" src="https://howlongtobeat.com/games/256px-Tr2011cover.jpg" />
      </div>
      <div class="review-list-details">
        <h2 class="review-list-title">Tomb Raider</h2>
        <span class="review-list-release-date">05 March 2016</span>
        <span class="review-list-description">After a brutal storm destroys the boat she was travelling on, a frightened young woman is left washed ashore on an unknown beach. On her own but not alone she has only one goal, to survive.</span>
        <div class="review-list-platforms">
          <Platforms />
        </div>
      </div>
      <div class="review-list-score">
        <ReviewScore />
      </div>
    </li>
    <!-- Review 4 -->
    <li class="review-list-item">
      <div class="review-list-image-box">
        <img class="review-list-image" src="https://howlongtobeat.com/games/256px-TW3_Wild_Hunt_logo.png" />
      </div>
      <div class="review-list-details">
        <h2 class="review-list-title">The Witcher 3: Wild Hunt</h2>
        <span class="review-list-release-date">09 June 2020</span>
        <span class="review-list-description">In The Witcher 3 an ancient evil stirs, awakening. An evil that sows terror and abducts the young. An evil whose name is spoken only in whispers: the Wild Hunt.</span>
        <div class="review-list-platforms">
          <Platforms />
        </div>
      </div>
      <div class="review-list-score">
        <ReviewScore />
      </div>
    </li>
    <!-- Review 5 -->
    <li class="review-list-item">
      <div class="review-list-image-box">
        <img class="review-list-image" src="https://howlongtobeat.com/games/27100_Red_Dead_Redemption_2.png" />
      </div>
      <div class="review-list-details">
        <h2 class="review-list-title">Red Dead Redemption 2</h2>
        <span class="review-list-release-date">17 Decemeber 2013</span>
        <span class="review-list-description">Red Dead Redemption 2 is an epic tale of life in America's unforgiving heartland. The game's vast and atmospheric world will also provide the foundation for a brand new online multiplayer experience.</span>
        <div class="review-list-platforms">
          <Platforms />
        </div>
      </div>
      <div class="review-list-score">
        <ReviewScore />
      </div>
    </li>
  </ol>
</template>

<script>
// Import components
import ReviewScore from '@/components/ReviewScore.vue'
import Platforms from '@/components/Platforms.vue'

export default {
  name: 'ReviewList',
  components: {
    ReviewScore,
    Platforms
  }
}
</script>

<style scoped lang="scss">
  .review-list {
    width: 100%;
    list-style-type: none;
    padding: 0;
      &-image {
        width: 6em;
        &-box{
          display: none;
        }
      }
      &-details {
        display: flex;
        flex-direction: column;
        padding-left: 0px;
        width: 80%;
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
      &-score {
        display: flex;
        width: 30%;
        justify-content: end;
        align-items: center;
      }
    &-item {
      display: flex;
      flex-direction: row;
      border-bottom: 1px gainsboro solid;
      padding: 10px 0;
      width: 100%;
      box-sizing: border-box;
      &> *:first-child {
        margin-right: auto;
      }
    }
    &-button {
      padding: 10px 50px;
      border-radius: 20px;
      font-weight: 600;
      background-color: $secondary-colour;
      border: none;
      width: 100%;
      font-size: 0.9em;
      &-container {
        margin-top: 12px;
      }
    }
  }
  @media (min-width: $small-breaking-point) {
    .review-list {
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
    .review-list {
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
      &-item {
        padding: 19px;
      }
    }
  }
  @media (min-width: $large-breaking-point) {
    .review-list {
      &-image {
        width: 8em;
        &-box{
          display: block;
        }
      }
      &-item {
        padding: 19px;
      }
    }
  }
</style>
