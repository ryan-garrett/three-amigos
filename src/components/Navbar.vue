<template>
  <nav id="nav" class="navbar-container">
    <div class="navbar-hamburger-container">
      <p>Icon</p>
    </div>
    <div class="navbar-logo-container">
      <router-link class="navbar-logo" to="/">3 Amigo Reviews</router-link>
    </div>
    <div class="navbar-links-group">
      <router-link class="navbar-text-links" to="/">Home</router-link>
      <router-link class="navbar-text-links" to="/reviews">Reviews</router-link>
      <router-link class="navbar-text-links" to="/about-us">About Us</router-link>
      <router-link class="navbar-text-links" to="/upcoming">Upcoming</router-link>
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
    padding: 0;
    height: 70px;
    width: 100%;
    box-sizing: border-box;

    a {
      font-weight: bold;
      color: #F1F1F1;
      text-decoration: none;

      &.router-link-exact-active {
        color: $secondary-colour;
      }
    }
  }
  .navbar {
    &-container {
      border: 1px solid $primary-colour;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: $primary-colour;
    }
    &-hamburger {
      &-container {
        display: block;
        width: 20%;
      }
    }
    &-text-links {
      font-size: 1.3em;
    }
    &-logo {
      font-size: 1em;
      color: #F1F1F1 !important;
      font-family: MildLifeRegular;
      &-container {
        display: block;
        width: 80%;
      }
    }
    &-links-group {
      display: none;
    }
  }
  @media (min-width: $large-breaking-point) {
    #nav {
      padding: 0 10em;
    }
    .navbar {
      &-container {
      }
      &-hamburger {
        &-container {
          display: none;
        }
      }
      &-logo {
        font-size: 2em;
        &-container {
          display: block;
          width: auto;
        }
      }
      &-links-group {
        display: flex;
        justify-content: space-between;
        width: 50%;
      }
    }
  }
</style>
