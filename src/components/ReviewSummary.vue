<template>
  <div class="review-summary-container">
    <h2>Ghosts Of Tsushima</h2>
    <span class="review-summary-score">90%</span>
    <br />
    <br />
    <hr  />
    <button class="review-summary-button">View</button>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
  .review-summary {
    &-container {
      border: 1px solid #242424;
      color: #F1F1F1;
      width: 400px;
      padding: 1em;
      background-color: #242424;
      background-image: url("../assets/images/test.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-blend-mode: overlay;
      border-radius: 10px;
      margin-top: 40px;

      hr {
        border-color: white;
      }
    }
    &-score {
      font-size: 2em;
      font-weight: bolder;
    }
    &-button {
      padding: 10px 50px;
      border-radius: 20px;
      font-weight: 600;
      background-color: #FF6200;
      border: none;
      width: 100%;
      margin: 12px 0 auto;
      font-size: 1em;
    }
  }
</style>
