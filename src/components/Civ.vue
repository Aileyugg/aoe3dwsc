<script setup>
import { createCiv, initCiv } from '../modules'
import UnitList from '../components/UnitList.vue'
import UnitCountList from '../components/UnitCountList.vue'
import CivList from './CivList.vue'

const civName = location.hash.slice(1) || 'Spanish'
// console.log(initCiv('Spanish'));
const { unitsList, techsList } = initCiv(civName)
// const a = JSON.stringify({ unitsList, techsList })
// console.time('1')
// initCiv(civName)
// console.timeEnd('1')
// console.time('2')
// JSON.parse(a)
// console.timeEnd('2')
const civ = createCiv(civName)
// console.log(civ);
</script>

<template>
  <div class="civ-mod">
    <header class="civ-name">{{ civ.dpName }}</header>
    <div class="civ-brief">
      <img :src="civ.icon" alt="">
      <p v-html="civ.intro"></p>
    </div>
    <div>选择革命</div>
    <CivList :civs="civ.revCiv"></CivList>
    <div>城镇中心运送单位</div>
    <UnitCountList :units="civ.startUnit"></UnitCountList>
    <div>开局运送单位</div>
    <UnitCountList :units="civ.townUnit"></UnitCountList>
    <div>单位</div>
    <UnitList :units="unitsList"></UnitList>
  </div>
</template>

<style lang="less" scoped>
.civ-mod {
  box-sizing: border-box;
  width: 920px;
  border-radius: 16px;
  padding: 36px 26px;
  background: #fff;
}

.civ-name {
  padding: 12px 0 36px;
  text-align: center;
  font-size: 1.23rem;
  font-weight: 600;
}

.civ-brief {
  display: flex;

  > img {
    height: 128px;
    margin: 0 30px;
    border-radius: 16px;
  }

  > p {
    white-space: pre-wrap;
  }
}

.unit-list {
  padding: 0;
}
</style>