<template>
  <div class="banner-container">
    <div class="banner-details">
      <div class="banner-title-box">
        <h1 class="banner-title">Ghosts Of Tsushima</h1>
        <div class="banner-score-box">
          <ReviewScore />
        </div>
      </div>
      <span class="banner-description">Ghost of Tsushima is an action-adventure game developed by Sucker Punch Productions and published by Sony Interactive Entertainment for PlayStation 4. Featuring an open world, it follows a samurai on a quest to protect Tsushima Island during the first Mongol invasion of Japan.</span>
      <button class="banner-button">View Review</button>
    </div>
    <div class="banner-container-wave">
      <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
        <path fill="#F1F1F1" fill-opacity="1" d="M0,224L48,229.3C96,235,192,245,288,234.7C384,224,480,192,576,202.7C672,213,768,267,864,277.3C960,288,1056,256,1152,240C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg> -->
      <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
        <path fill="#F1F1F1" fill-opacity="1" d="M0,128L60,117.3C120,107,240,85,360,80C480,75,600,85,720,101.3C840,117,960,139,1080,138.7C1200,139,1320,117,1380,106.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg> -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
        <path fill="#F1F1F1" fill-opacity="1" d="M0,128L80,144C160,160,320,192,480,186.7C640,181,800,139,960,128C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
    </div>
  </div>
</template>

<script>
// Import components
import ReviewScore from '@/components/ReviewScore.vue'

export default {
  name: 'Banner',
  props: {
    msg: String
  },
  components: {
    ReviewScore
  }
}
</script>

<style scoped lang="scss">
  .banner {
    &-container {
      position: relative;
      background-color: $primary-colour;
      background-image: url("https://images.hdqwalls.com/download/ghost-of-tsushima-5k-ju-2560x1600.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-blend-mode: overlay;
      height: 325px;
      min-height: 325px;
      display: flex;
      flex-direction: column;
      color: white;
      align-items: center;
      box-sizing: border-box;
      &-wave {
        position:absolute;
        bottom: -6px;
        width: 100%;
      }
    }
    &-title-box {
      display: flex;
    }
    &-score-box {
      display: none;
    }
    &-details {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 1.5em;
      padding-bottom: 0;
      box-sizing: border-box;
    }
    &-title {
      font-size: 1.5em;
      margin-top: 0;
    }
    &-description {
      font-size: 0.9em;
      margin-top: 0;
    }
    &-button {
      padding: 10px 50px;
      border-radius: 20px;
      background-color: $secondary-colour;
      border: none;
      width: 100%;
      font-size: 1em;
      font-weight: bolder;
      margin-top: 10px;
    }
  }
  @media (min-width: $small-breaking-point) {
    .banner {
      &-score-box {
        display: flex;
        justify-content: center;
        padding-left: 25px;
        margin-top: -25px;
        width: 70px;
      }
    }
  }
  @media (min-width: $medium-breaking-point) {
    .banner {
      &-container {
        height: 400px;
      }
      &-details {
        padding: 2em 3em;
      }
      &-score-box {
        width: 100px;
      }
      &-title {
        font-size: 2.5em;
      }
      &-description {
        font-size: 1.3em;
      }
      &-button {
        width: 200px;
        margin-top: 20px;
      }
    }
  }
  @media (min-width: $large-breaking-point) {
    .banner {
      &-container {
        height: 400px;
      }
      &-details {
        padding: 3em 10em;
      }
      &-title {
        font-size: 2.5em;
      }
      &-description {
        font-size: 1.3em;
      }
      &-button {
        width: 200px;
        margin-top: 20px;
      }
    }
  }
</style>
