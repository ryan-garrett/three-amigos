<template>
  <div class="platforms">
    <img class="platforms-icon" src="../assets/images/Xbox-Logo.png" />
    <img class="platforms-icon" src="../assets/images/Playstation-Logo.png" />
    <img class="platforms-icon" src="../assets/images/PC-Logo.png" />
    <img class="platforms-icon" src="../assets/images/Switch-Logo.png" />
  </div>
</template>

<script>
export default {
  name: 'Platforms',
  props: {
    isPlatforms: {
      type: Array
    }
  }
}
</script>

<style scoped lang="scss">
  .platforms {
    display: flex;
    & img {
      width: 30px;
      height: 30px;
      border-radius: 4px;
      margin-right: 12px;
    }
  }
</style>
