<script setup>
// import { ref } from 'vue';
// import { createTech } from '../modules'
// import { updateMap } from '../modules/global.js'

const props = defineProps({
  techs: Array,
  addTech: Function,
})

</script>

<template>
  <div class="techs-item">
    <div v-for="tech of techs" @click="addTech(tech)">
      <img class="tech-icon" :src="`/${tech.icon}`" alt="">
      <img class="tick" v-if="tech.show" src="/images/tick.png" alt="">
    </div>
  </div>
</template>

<style lang="less" scoped>
.techs-item {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  > div {
    font-size: 0;

    > .tick {
      height: 32px;
      position: absolute;
      translate: -36px 5px;
    }

    > .tech-icon {
      width: 64px;
    }
  }
}
</style>