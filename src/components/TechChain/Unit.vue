<script setup>
import unitsData from '../../assets/units.json'

const props = defineProps({
  unit: String,
})

const unitData = unitsData[props.unit]
console.log(unitData);
</script>

<template>
  <div class="unit">
    <img class="unit-icon" :src="`/${unitData.icon}`" alt="">
  </div>
</template>

<style lang="less" scoped>
.unit-icon {
  height: 100px;
}
</style>