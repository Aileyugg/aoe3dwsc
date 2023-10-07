<script setup>
import { computed, ref } from 'vue';
import { locateIcon } from '../modules';

const props = defineProps({
  data: Object,
  type: String,
  get: Function,
  compute: Function,
  // order: {
  //   type: Array,
  //   default: [],
  // },
  order: Array,
})

// function keyOrder(key) {
//   const orderAry = props.order

//   if (!orderAry) {
//     return key
//   }

//   return orderAry.indexOf(key)
// }

// result
function tettt(data) {
  if (props.type !== 'damage') return data
  if (!data) return data

  const refData = ref(data)
  console.log(refData);

  const range = computed(() => {
    // 过滤undefined的值
    const rangeAry = [refData.value.minRange, refData.value.maxRange].filter((item) => item)

    if (rangeAry.length === 0) return


    return rangeAry.join(' ~ ')
  })
  return {
    ...data,
    range,
  }
}

// const figureObj = tettt() || props.data

// const get = props.get

// const figureObj = computed(() => {
//   const data = props.data
//   if (props.type !== 'damage') return data
//   const newData = {}
//   const order = ['Siege', 'Hand', 'Ranged', 'range', 'area', 'rof', 'time']

//   for (const value of order) {
//     const item = data[value]
//     if (!item) continue

//     newData[value] = item
//     const rangeAry = [data.minRange, data.maxRange].filter((item) => item)

//     if (rangeAry.length !== 0) {
//       newData.range = rangeAry.join(' ~ ')
//     }
//   }

//   return newData
// })

// const figureObj = computed(() => {
//   const data = props.data
//   if (props.type !== 'damage') return data
//   const newData = {}
//   const order = ['Siege', 'Hand', 'Ranged', 'range', 'area', 'rof', 'time']

//   for (const value of order) {
//     if (value === 'range') {
//       const rangeAry = [get(data, 'minRange'), get(data, 'maxRange')].filter((item) => item)
//       console.log(rangeAry);
//       if (rangeAry.length !== 0) {
//         newData.range = rangeAry.join(' ~ ')
//       }
//       continue
//     }

//     const item = get(data, value)
//     if (!item) continue
//     // console.log(value);
//     newData[value] = item
//     // const rangeAry = [data.minRange, data.maxRange].filter((item) => item)

//     // console.log(newData);
//   }

//   return newData
// })

function filter(value) {
  if (props.type === 'bonus') return `× ${value}`
  return value
}
</script>

<template>
  <div class="figure-item">
    <template v-for="value, key of data" :key="key">
      <div v-if="value !== undefined">
        <img v-if="locateIcon(key)" :src="locateIcon(key)">
        <span>{{ filter(value) }}</span>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.figure-item {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 28px;

  > div {

    > img {
      float: left;
      height: 23px;
      margin: 1px 6px 1px 0;
    }

    > span {
      line-height: 1.6rem;
    }
  }
}
</style>