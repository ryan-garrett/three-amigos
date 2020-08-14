import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Reviews from '../views/Reviews.vue'
import GameOfTheYear from '../views/GameOfTheYear.vue'
import Upcoming from '../views/Upcoming.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: Reviews
  },
  {
    path: '/about-us',
    name: 'About',
    component: About
  },
  {
    path: '/upcoming',
    name: 'Upcoming',
    component: Upcoming
  },
  {
    path: '/game-of-the-year',
    name: 'GameOfTheYear',
    component: GameOfTheYear
  }
]

const router = new VueRouter({
  routes
})

export default router
