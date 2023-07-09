<script setup>
import { ref } from 'vue'
import techsData from '../../assets/techs.json'
import { lang } from '../../modules'
import Tech from './Tech.vue'
import Unit from './Unit.vue'

const props = defineProps({
  tech: String,
})

const techData = techsData[props.tech]
console.log(techData);
// console.log(JSON.stringify(techData.effects, null, 2));

const techShow = ref([])
function switchTechShow(index) {
  if (techShow.value[index]) {
    return
  }

  techShow.value[index] = 1
}
</script>

<template>
  <div class="tech">
    <div>调用名：{{ tech }}</div>
    <div>中文名：{{ lang(techData.dpName) || '无' }}</div>
    <img :src="techData.icon" alt="">
    <div>效果：{{ techData.effects }}</div>
    <div class="unit-list">
      <div v-for="unit of techData.enable">
        <Unit :unit="unit"></Unit>
      </div>
    </div>
    <div v-for="tech, index of techData.active">
      <div @click="switchTechShow(index)">{{ tech }}</div>
      <component :is="Tech" :tech="tech" v-if="techShow[index]"></component>
    </div>
  </div>
</template>

<style lang="less" scoped>
.tech {
  margin-left: 20px;
}

.unit-list {
  display: flex;
  flex-wrap: wrap;
}
</style>