<script setup>
import unitsData from '../assets/units.json'
import { lang } from '../modules'

const props = defineProps({
  units: Array
})

const unitsObj = {}

for (const unit of props.units) {
  const unitData = unitsData[unit]
  if (!unitData) continue

  unitsObj[unit] = {
    icon: `/${unitData.icon}`,
    dpName: lang(unitData.dpName),
    href: `/html/unit.html#${unit}`
  }
}
</script>

<template>
  <ul class="unit-list">
    <li class="unit" v-for="unit in unitsObj">
      <a :href="unit.href">
        <img :src="unit.icon" alt="">
        <span>{{ unit.dpName }}</span>
      </a>
    </li>
  </ul>
</template>

<style lang="less" scoped>
.unit-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  border-radius: 16px;
  padding: 20px 26px;
}

.unit {
  padding: 12px;

  > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    text-decoration: none;
    transition: all 0.12s;

    &:hover {
      transform: scale(1.1);
    }

    > img {
      height: 100px;
      border-radius: 12px;
    }

    > span {
      margin-top: 10px;
    }
  } 
}
</style>