<script setup>
import { ref } from 'vue';
import { createCiv } from '../modules'
import CardList from './CardList.vue';
import { romanAge } from '../assets/langMap.json'
import { lang } from '../modules';

const civName = location.hash.slice(1) || 'Spanish'
const civ = createCiv(civName)
console.log(civ.cards);
const buttonList = [romanAge.Age0, romanAge.Age1, romanAge.Age2, romanAge.Age3]
const cardAge = ref(0)
</script>

<template>
  <div class="card-mod">
    <header class="web-title">查看卡片</header>
    <div class="age-button">
      <div v-for="value, index of buttonList" @click="cardAge = index">{{ lang(value) }}</div>
    </div>
    <CardList :cards="civ.cards" :age="cardAge"></CardList>
  </div>
</template>

<style lang="less" scoped>
.card-mod {
  box-sizing: border-box;
  width: 920px;
  border-radius: 16px;
  padding: 36px 26px;
  background: #fff;
}

.web-title {
  padding: 12px 0 36px;
  text-align: center;
  font-size: 1.23rem;
  font-weight: 600;
}

.age-button {
  display: flex;
  justify-content: space-evenly;

  > div {
    width: 160px;
    padding: 10px 16px;
    border-radius: 8px;
    background: #C79037;
    text-align: center;
  }
}
</style>