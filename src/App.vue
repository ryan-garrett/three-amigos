<template>
  <div id="app">
    <Navbar />
    <div class="main-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .main-content {
    padding: 2em 10em;
  }
</style>
