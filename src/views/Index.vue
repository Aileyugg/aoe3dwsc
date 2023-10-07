<script setup>
import { ref } from 'vue'
import CivList from '@/components/CivList.vue'
import UnitList from '@/components/UnitList.vue'
import { civsAry } from '@/modules/global'
import indexData from '@/assets/index.json'

</script>

<template>
  <div class="index">
    <div class="civs" id="civs">
      <header>查看文明</header>
      <CivList :civs="civsAry" />
    </div>
    <div class="units" v-for="item in indexData" :id="item.id">
      <header>{{ item.dpName }}</header>
      <UnitList :units="item.units" />
    </div>
  </div>
  <aside>
    <header class="nav-title">
      <i class="ifont icon-list"></i>
      <span>导航栏</span>
    </header>
    <ul class="nav">
      <li v-for="item in indexData">
        <a :href="`#${item.id}`">{{ item.dpName }}</a>
      </li>
    </ul>
    <header class="nav-title">
      <i class="ifont icon-list"></i>
      <span>工具栏</span>
    </header>
    <ul class="nav">
      <li><a href="">天梯排名</a></li>
      <li><a href="">游戏地图</a></li>
      <li><a href="https://replay.aoe4.top/" target="_blank">录像库</a></li>
    </ul>
  </aside>
</template>

<style lang="less" scoped>
#lib {
  .header() {
    padding: 34px 0 9px;
    font-size: 1.25rem;
    font-weight: 600;
    text-align: center;
  }

  .box() {
    margin-bottom: 18px;
    border-radius: 16px;
    background: @body-color;
  }
}

.index {
  width: 920px;
}

.civs {
  #lib.box();

  > header {
    #lib.header();
  }
}

.units {
  #lib.box();

  > header {
    #lib.header()
  }
}

aside {
  // position: fixed;
  // transform: translateX(940px);
  width: 180px;
  // height: 648.6px;
  border-radius: 16px;
  padding: 20px 0;
  background: @body-color;
}

.nav-title {
  padding: 14px 0 9px;
  font-size: 1.12rem;
  font-weight: 600;
  text-align: center;

  > i {
    font-size: 1.8rem;
    margin-right: 6px;
  }
}

.nav {
  padding: 0;

  > li {
    margin: 8px 18px;
    border-radius: 16px;
    padding: 0;
    text-align: center;
    font-size: 1.1rem;

    &:hover {
      background: #666;
    }

    > a {
      display: block;
      padding: 8px 0;
      color: #ddd;
    }
  }
}
</style>