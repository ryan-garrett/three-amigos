<template>
  <nav id="nav" class="navbar-container">
    <div>
      <router-link class="navbar-logo" to="/">3AR</router-link>
    </div>
    <div>
      <router-link to="/reviews">Reviews</router-link>
      <router-link to="/about-us">About Us</router-link>
      <router-link to="/upcoming">Upcoming</router-link>
      <router-link to="/game-of-the-year">GOTY</router-link>
    </div>
  </nav>
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
  #nav {
    padding: 0 30px;
    height: 70px;

    a {
      font-weight: bold;
      color: #F1F1F1;
      padding: 0 30px;
      text-decoration: none;

      &.router-link-exact-active {
        color: #FF6200;
      }
    }
  }
  .navbar {
    &-container {
      border: 1px solid #242424;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #242424;
    }
    &-logo {
      font-size: 2em;
    }
  }
</style>
