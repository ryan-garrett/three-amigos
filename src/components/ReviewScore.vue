<template>
  <svg viewBox="0 0 36 36" class="circular-chart orange">
    <path class="circle-bg"
      d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
    />
    <path class="circle"
      stroke-dasharray="90, 100"
      d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"
    />
    <text x="18" y="20.35" class="percentage">90%</text>
  </svg>
</template>

<script>
export default {
  name: 'Platforms'
}
</script>

<style scoped lang="scss">

.circular-chart {
  display: block;
  max-width: 80%;
  max-height: 100px;
}

.circle-bg {
  fill: none;
  stroke: #777;
  stroke-width: 3.8;
}

.circle {
  fill: none;
  stroke-width: 4;
  stroke-linecap: butt;
  animation: progress 1s ease-out forwards;
}

@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}

.circular-chart.orange .circle {
  stroke: $secondary-colour;
}

.percentage {
  fill: #777;
  font-size: 0.5em;
  text-anchor: middle;
}
</style>
