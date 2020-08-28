<template>
  <ol class="mini-coming-soon">
    <!-- Upcoming game 1 -->
    <li class="mini-coming-soon-item" style="background-image: url('https://cdn.mos.cms.futurecdn.net/rLh7Dh7EKo8F6zmDtXYp8W.jpg');">
      <div class="mini-coming-soon-item-date">
        <svg width="70" height="70">
          <circle cx="35" cy="35" r="35" fill="rgba(255, 98, 0, 0.9)" />
          <text x="50%" y="35%" text-anchor="middle" fill="#000" font-weight="bolder" font-size="24px" dy=".4em">24</text>
          <text x="50%" y="60%" text-anchor="middle" fill="#000" font-weight="bolder" font-size="20px" dy=".4em">AUG</text>
        </svg>
      </div>
      <div class="mini-coming-soon-item-details">
        <h3>
          Cyberpunk 2077
        </h3>
      </div>
    </li>
    <br />
    <!-- Upcoming game 2 -->
    <li class="mini-coming-soon-item" style="background-image: url('https://wallpaperaccess.com/full/938976.png');">
      <div class="mini-coming-soon-item-date">
        <svg width="70" height="70">
          <circle cx="35" cy="35" r="35" fill="rgba(255, 98, 0, 0.9)" />
          <text x="50%" y="35%" text-anchor="middle" fill="#000" font-weight="bolder" font-size="24px" dy=".4em">05</text>
          <text x="50%" y="60%" text-anchor="middle" fill="#000" font-weight="bolder" font-size="20px" dy=".4em">NOV</text>
        </svg>
      </div>
      <div class="mini-coming-soon-item-details">
        <h3>
          Halo Infinite
        </h3>
      </div>
    </li>
    <br />
    <!-- Upcoming game 3 -->
    <li class="mini-coming-soon-item" style="background-image: url('https://cdn.xsolla.net/xsolla-com-v6/file-1360-6AaTcqTC.jpg');">
      <div class="mini-coming-soon-item-date">
        <svg width="70" height="70">
          <circle cx="35" cy="35" r="35" fill="rgba(255, 98, 0, 0.9)" />
          <text x="50%" y="35%" text-anchor="middle" fill="#000" font-weight="bolder" font-size="24px" dy=".4em">27</text>
          <text x="50%" y="60%" text-anchor="middle" fill="#000" font-weight="bolder" font-size="20px" dy=".4em">JUL</text>
        </svg>
      </div>
      <div class="mini-coming-soon-item-details">
        <h3>
          Atomic Heart
        </h3>
      </div>
    </li>
    <br />
    <!-- Upcoming game 4 -->
    <li class="mini-coming-soon-item" style="background-image: url('https://cdn.collider.com/wp-content/uploads/2020/08/suicide-squad-game-images-3.png');">
      <div class="mini-coming-soon-item-date">
        <svg width="70" height="70">
          <circle cx="35" cy="35" r="35" fill="rgba(255, 98, 0, 0.9)" />
          <text x="50%" y="35%" text-anchor="middle" fill="#000" font-weight="bolder" font-size="24px" dy=".4em">30</text>
          <text x="50%" y="60%" text-anchor="middle" fill="#000" font-weight="bolder" font-size="20px" dy=".4em">MAR</text>
        </svg>
      </div>
      <div class="mini-coming-soon-item-details">
        <h3>
          Suicide Squad: Kill the Justice League
        </h3>
      </div>
    </li>
    <br />
    <!-- Upcoming game 5 -->
    <li class="mini-coming-soon-item" style="background-image: url('https://www.theloadout.com/wp-content/uploads/2020/07/fifa-21-mbappe-1200x675.jpg');">
      <div class="mini-coming-soon-item-date">
        <svg width="70" height="70">
          <circle cx="35" cy="35" r="35" fill="rgba(255, 98, 0, 0.9)" />
          <text x="50%" y="35%" text-anchor="middle" fill="#000" font-weight="bolder" font-size="24px" dy=".4em">13</text>
          <text x="50%" y="60%" text-anchor="middle" fill="#000" font-weight="bolder" font-size="20px" dy=".4em">FEB</text>
        </svg>
      </div>
      <div class="mini-coming-soon-item-details">
        <h3>
          Fifa 21
        </h3>
      </div>
    </li>
  </ol>
</template>

<script>
export default {
  name: 'MiniComingSoon'
}
</script>

<style scoped lang="scss">
  .mini-coming-soon {
    list-style-type: none;
    margin-top: 19px;
    padding: 0;
    &-item {
      display: flex;
      flex-direction: row;
      background-color: $primary-colour;
      background-repeat: no-repeat;
      background-size: cover;
      background-blend-mode: overlay;
      border: 1px #2c3e50 solid;
      border-radius: 15px;
      padding: 20px;
      width: 100%;
      box-sizing: border-box;
      &-date {
        display: flex;
        width: 75px;
        align-items: center;
        text-align: center;
        color: #D40000;
      }
      &-details {
        width: 75%;
        color: #FFF;
        font-size: 1em;
        padding-left: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
    }
  }
  @media (min-width: $medium-breaking-point) {
    .mini-coming-soon {
      &-details {
        font-size: 1.3em;
      }
    }
  }
</style>
