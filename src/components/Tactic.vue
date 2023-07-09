<script setup>
import { ref, computed, reactive } from 'vue';
import Figure from './Figure.vue';
import { pageLang } from '../modules';
import battle from '../assets/battles.json'
import { lang } from '../modules';

const has = Object.prototype.hasOwnProperty;

const props = defineProps({
  // srcUnit: Object,
  get: Function,
  actions: Object,
  tactic: Object,
})

// const actions = props.srcUnit.actions
const tactic = props.tactic
const get = props.get

// const tactic = props.tactic

const tacticObj = (function () {
  const tacticObj = {}

  for (const item of Object.keys(battle)) {
    if (!tactic[item]) continue
    const { icon, dpName } = battle[item]
    tacticObj[item] = {
      icon: `/${icon}`,
      dpName,
      value: tactic[item],
    }
  }

  return tacticObj
}())

console.log(tacticObj);
// console.log(props.tactic);
// function switchTactic() {

// }

// 当前的战术模式
const [firstTactic, secondTactic] = Object.keys(tacticObj)
const nowTactic = ref(firstTactic === 'Stealth' ? secondTactic : firstTactic)

function useDamage(damageObj) {
  const newData = {}
  const order = ['Siege', 'Hand', 'Ranged', 'range', 'area', 'rof', 'time']

  for (const value of order) {
    if (value === 'range') {
      const minRange = get(damageObj, 'minRange')
      const maxRange = get(damageObj, 'maxRange')
      const range = computed(() => {
        // 过滤undefined的值
        const rangeAry = [minRange, maxRange].filter((item) => item)

        if (rangeAry.length === 0) return

        return rangeAry.join(' ~ ')
      })
      
      if (range) {
        newData.range = range
      }

      continue
    }

    const item = get(damageObj, value)
    if (!item) continue
    // console.log(value);
    newData[value] = item
    // const rangeAry = [data.minRange, data.maxRange].filter((item) => item)
    
    // console.log(newData);
  }
  console.log(newData);

  return newData
}

function useAction() {
  const srcActions = props.actions
  const actionUpdate = new WeakMap()
  // const actionUpdate = new WeakMap()

  for (const action of Object.keys(srcActions)) {
    const damageObj = srcActions[action].damage
    if (!damageObj) continue

    const order = ['Siege', 'Hand', 'Ranged', 'range', 'area', 'rof', 'time']
    const damageUpdate = {}

    for (const value of order) {
      if (value === 'range') {
        const minRange = damageObj.minRange
        const maxRange = damageObj.maxRange
        const range = computed(() => {
          // 过滤undefined的值
          const rangeAry = [minRange, maxRange].filter((item) => item)

          if (rangeAry.length === 0) return

          return rangeAry.join(' ~ ')
        })

        // const range = [damageObj.minRange, damageObj.maxRange].filter((item) => item).join(' ~ ')
        
        if (range) {
          damageUpdate.range = range
        }

        continue
      }
      
      const item = damageObj[value]
      if (!item) continue

      damageUpdate[value] = item
      // console.log(get(damageObj, value));
    }

    actionUpdate.set(damageObj, damageUpdate)
    // srcActions[action].newDamage = damageUpdate
    // console.log(srcActions, damageUpdate);
  }

  function getObj(target) {
    // console.log(actionUpdate);
    return actionUpdate.get(target)
  }
  
  
  return getObj
}

const getObj = useAction()

// 调整攻击数据的排列顺序
function adjustDamage(target) {
  function getRange() {
    // 过滤undefined的值
    const rangeAry = [target.minRange, target.maxRange].filter((item) => item)

    if (rangeAry.length === 0) return

    return rangeAry.join(' ~ ')
  }

  return {
    Siege: target.Siege,
    Hand: target.Hand,
    Ranged: target.Ranged,
    range: getRange(),
    area: target.area,
    rof: target.rof,
    time: target.time,
  }
}
</script>

<template>
  <div class="tactic-item">
    <div class="battle">
      <div v-for="tactic, key of tacticObj" :title="lang(tactic.dpName)" @click="nowTactic = key">
        <img class="icon" :src="tactic.icon" alt="">
        <img class="tick" v-if="nowTactic === key" src="/images/tick.png" alt="">
      </div>
    </div>
    <template v-for="action, key of actions">
      <div class="actions" v-show="tacticObj[nowTactic].value.includes(key)">
        <div>{{ action.dpName + pageLang('colon') }}</div>
        <Figure :data="adjustDamage(action.damage)"></Figure>
        <Figure v-if="action.bonus" :data="action.bonus" type="bonus"></Figure>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.tactic-item {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
}

.battle {
  display: flex;
  flex-direction: row;
  column-gap: 10px;

  > div {
    cursor: pointer;
    font-size: 0;

    > .icon {
      width: 64px;
      height: 64px;
    }

    > .tick {
      position: absolute;
      translate: -36px 5px;
    }
  }
}

.actions {
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    line-height: 1.6rem;

    > div:first-child {
      color: #666;

      ~ div {
        margin-left: 32px;
      }
    }
  }

</style>