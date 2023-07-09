<script setup>
import techs from '../assets/techs.json'

const props = defineProps({
  cards: Array,
  age: Number,
})

let cardObj = {}

for (const card of props.cards) {
  let cardsObj = techs[card]

  cardObj[card] = {
    ...cardsObj,
    icon: `/${techs[card].icon}`,
  }
}
</script>

<template>
  <ul class="card-list-mod">
    <li class="card-list" v-for="tech of cardObj" v-show="age === tech.age">
      <img class="card-icon" :src="tech.icon" alt="">
      <img class="tick" v-if="tech.show" src="/images/tick.png" alt="">
    </li>
  </ul>
</template>

<style lang="less" scoped>
.card-list-mod {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.card-list {
  > .card-icon {
    width: 84px;
  }
}
</style>