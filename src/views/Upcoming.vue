<template>
  <div class="upcoming">
    <div class="upcoming-bar">
      <h1>Upcoming Games</h1>
      <div class="upcoming-filter">
        <div class="upcoming-filter-platform">
          <span>Filter:</span>
          <PlatformChecklist />
        </div>
        <div class="upcoming-filter-sort">
          <Sort
            :sortData="sort.months"
            :selected="sort.selectedSort"
          />
        </div>
      </div>
    </div>
    <hr />
    <!-- Day 1 -->
    <div class="upcoming-date">
      <h2>Wednesday 5th August</h2>
      <hr />
      <div class="upcoming-date-content">
        <UpcomingGame
          :gameImage="gameOne.image"
          :gameTitle="gameOne.title"
          :gameReleaseDate="gameOne.releaseDate"
          :gameDescription="gameOne.description"
          :gamePlatforms="gameOne.platform"
        />
        <br />
        <UpcomingGame
          :gameImage="gameTwo.image"
          :gameTitle="gameTwo.title"
          :gameReleaseDate="gameTwo.releaseDate"
          :gameDescription="gameTwo.description"
          :gamePlatforms="gameTwo.platform"
        />
        <br />
      </div>
    </div>
    <!-- Day 2 -->
    <div class="upcoming-date">
      <h2>Thursday 6th August</h2>
      <hr />
      <div class="upcoming-date-content">
        <UpcomingGame
          :gameImage="gameThree.image"
          :gameTitle="gameThree.title"
          :gameReleaseDate="gameThree.releaseDate"
          :gameDescription="gameThree.description"
          :gamePlatforms="gameThree.platform"
        />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
// Import components
import PlatformChecklist from '@/components/PlatformChecklist.vue'
import Sort from '@/components/Sort.vue'
import UpcomingGame from '@/components/UpcomingGame.vue'

export default {
  name: 'UpcomingGames',
  components: {
    PlatformChecklist,
    Sort,
    UpcomingGame
  },
  data () {
    return {
      sort: {
        months: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ],
        selectedSort: 'January'
      },
      gameOne: {
        image: 'https://howlongtobeat.com/games/80870_Far_Cry_6.jpg',
        title: 'Far Cry 6',
        releaseDate: '5 August 2021',
        description: 'Welcome to Yara, a tropical paradise frozen in time. FAR CRY®6 thrusts players into the adrenaline-filled world of a modern-day guerrilla revolution. As dictator of Yara, Anton Castillo is intent on restoring his nation back to its former glory by any means, with his son, Diego, following in his bloody footsteps.',
        platform: [
          'Xbox',
          'Playstation',
          'PC',
          'Switch'
        ]
      },
      gameTwo: {
        image: 'https://howlongtobeat.com/games/80038_Resident_Evil_Village.jpg',
        title: 'Resident Evil Village',
        releaseDate: '5 August 2021',
        description: 'Set a few years after the horrifying events in the critically acclaimed Resident Evil 7 biohazard, the all-new storyline begins with Ethan Winters and his wife Mia living peacefully in a new location, free from their past nightmares. Just as they are building their new life together, tragedy befalls them once again.',
        platform: [
          'Xbox',
          'Playstation',
          'PC'
        ]
      },
      gameThree: {
        image: 'https://vignette.wikia.nocookie.net/marvel_dc/images/0/00/Justice_League_vs_Suicide_Squad_Vol_1_1.jpg/revision/latest?cb=20161221114615',
        title: 'Suicide Squad: Kill the Justice League',
        releaseDate: '6 August 2021',
        description: 'Suicide Squad: Kill the Justice League is an upcoming action-adventure game developed by Rocksteady Studios and published by Warner Bros. Interactive Entertainment.',
        platform: [
          'PC'
        ]
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .upcoming {
    margin-top: 0;
    &-bar {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
    }
    &-filter {
      display: flex;
      flex-direction: column;
      padding-bottom: 12px;
      width: 100%;
      &-platform {
        display: flex;
        width: 100%;
        margin-right: 12px;
        align-items: center;
      }
      &-sort {
        width: 100%;
        margin-top: 10px;
      }
    }
    &-date {
      margin-top: 20px;
      & hr {
        border: 1px solid gainsboro;
      }
      &-content {
        padding: 1em 0 0 0;
      }
    }
  }
  @media (min-width: $medium-breaking-point) {
    .upcoming {
      &-bar {
        display: flex;
        align-items: center;
        flex-direction: row;
      }
      &-filter {
        display: flex;
        flex-direction: row;
        padding-bottom: 0;
        width: 55%;
        &-platform {
          width: 70%;
          margin-right: 10px;
          align-items: center;
        }
        &-sort {
          width: 35%;
          margin-top: 0;
        }
      }
      &-date {
        &-content {
          padding: 1em 1em 0 1em;
        }
      }
    }
  }
  @media (min-width: $large-breaking-point) {
    .upcoming {
      margin-top: 2em;
    }
  }
</style>
