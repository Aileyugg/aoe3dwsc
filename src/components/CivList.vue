<script setup>
import { lang } from '../modules'
import civsData from '../assets/civs.json'

const props = defineProps({
  civs: Array
})

const civsObj = {}

for (const civ of props.civs) {
  civsObj[civ] = {
    icon: `/${civsData[civ].icon}`,
    dpName: lang(civsData[civ].dpName),
    href: `/html/civ.html#${civ}`,
  }
}
console.log(civsObj);
</script>

<template>
  <ul class="civ-list">
    <li class="civ" v-for="civ in civsObj">
      <a :href="civ.href">
        <img :src="civ.icon" alt="">
        <span>{{ civ.dpName }}</span>
      </a>
    </li>
  </ul>
</template>

<style lang="less" scoped>
.civ-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  border-radius: 16px;
  padding: 20px 26px;
}

.civ {
  padding: 12px;

  > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    transition: all 0.12s;
    color: @link-color;

    &:hover {
      transform: scale(1.1);
    }

    > img {
      height: 80px;
      border-radius: 12px;
    }

    > span {
      margin-top: 10px;
    }
  } 
}
</style>