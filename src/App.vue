<script setup>
import { defineAsyncComponent } from 'vue'

let MainView
const { pathname } = location

if (pathname === '/') {
  MainView = defineAsyncComponent(() => import('./components/Index.vue'))
} else if (pathname === '/html/civ.html') {
  MainView = defineAsyncComponent(() => import('./components/Civ.vue'))
} else if (pathname === '/html/unit.html') {
  MainView = defineAsyncComponent(() => import('./components/Unit.vue'))
} else if (pathname === '/html/card.html') {
  MainView = defineAsyncComponent(() => import('./components/Card.vue'))
} else {
  MainView = defineAsyncComponent(() => import('./components/Index.vue'))
}


</script>

<template>
  <header>
    <p>帝国时代3单位手册</p>
  </header>
  <main>
    <Suspense>
      <MainView />
      <template #fallback>Loading...</template>
    </Suspense>
  </main>
  <footer>
  </footer>
</template>

<style lang="less" scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  margin-bottom: 18px;
  box-shadow: 0 1px 4px rgb(17 17 17 / 40%);
  background: #36393f;

  > p {
    font: 600 28px/32px Arial, 'Microsoft YaHei';
  }
}

main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 1120px;
  margin: auto;
  flex: 1;
}

// header{
//   height: 90px;
//   margin-bottom: 16px;
//   border-bottom: 2px solid #cc6;

//   > p {
//     width: 980px;
//     text-align: center;
//     font: 600 34px/48px Arial, 'Microsoft YaHei';
//   }
// }

// main {
//   display: flex;
//   justify-content: space-between;
//   width: 1120px;
//   margin: auto;
//   flex: 1;
// }

// footer {
//   height: 60px;
//   margin-top: 16px;
//   border-top: 2px solid #cc6;
// }
</style>
