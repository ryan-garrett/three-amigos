<template>
  <div id="app">
    <Navbar />
    <section v-if="isHome">
      <Banner />
    </section>
    <div class="main-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
// Import components
import Navbar from '@/components/Navbar.vue'
import Banner from '@/components/Banner.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Banner
  },
  computed: {
    isHome () {
      return this.$route.name === 'Home'
    }
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
    background-color: #F1F1F1;
  }
  h1 {
    font-size: 1.5em;
  }
  h2 {
    margin: 0;
  }
  h3 {
    margin: 0;
  }
  hr {
    border: 1px solid $primary-colour;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .main-content {
    padding: 1em;
  }
  @media (min-width: $medium-breaking-point) {
    h1 {
      font-size: 2em;
    }
    h2 {
      margin: 0;
    }
    h3 {
      margin: 0;
    }
  }
  @media (min-width: $large-breaking-point) {
    h1 {
      font-size: 2em;
    }
    h2 {
      margin: 0;
    }
    h3 {
      margin: 0;
    }
    .main-content {
      padding: 0 10em;
    }
  }
</style>
