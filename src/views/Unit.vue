<script setup>
import { ref, toRefs, onMounted, customRef, reactive, computed, watchEffect, onUpdated } from 'vue';
import { createUnit, createTech, pageLang, filter, getUnitCiv } from '../modules';
import { updateMap } from '../modules/global.js'
import Figure from '@/components/Figure.vue';
import Tactic from '@/components/Tactic.vue';
import Techs from '@/components/Techs.vue';

const isObject = (val) => val !== null && typeof val === 'object';
const isString = (val) => typeof val === 'string';

function useUp(value) {
  if (!value) return

  const updateAry = ref([1, 0])

  const result = computed({
    get() {
      console.log(value);
      const [mulValue, addValue, movValue] = updateAry.value

      if (movValue !== undefined) {
        return parseInt(movValue * mulValue) + addValue
      }

      return parseInt(value * mulValue) + addValue
    },
    set(newValue) {
      const [relate, amount] = newValue

      const parseRelate = (relate, amount) => {
        let [mulValue, addValue] = updateAry.value

        switch (relate) {
          case ('BasePercent'): return [mulValue += amount - 1, addValue]
          case ('Absolute'): return [mulValue, addValue += amount]
          case ('Assign'): return [mulValue, addValue, amount]
          case ('Percent'): return [mulValue *= amount, addValue]
        }
      }

      updateAry.value = parseRelate(relate, amount)
      console.log(updateAry.value);
    }
  })

  return result
}

function addTech(tech) {
  if (tech.show) return

  tech.show = true
  const myEffect = tech.myEffect
  console.log(myEffect);

  for (const effect of Object.keys(myEffect)) {
    console.log(`%c${effect}`, 'color: white; background: navy;');
    const update = updateMap.get(effect)
    if (!update) continue

    if (update === 1) {
      parseEffect(effect)
      continue
    }

    const { relate, amount } = myEffect[effect]
    console.log(update);
    unit[update] = [relate, amount]
    // unit.set(update, [relate, amount])
    // test[update] = [relate, amount]
    // set(unit, update, [relate, amount])
  }

  function parseEffect(effect) {
    const { relate, amount, allActions, unitType } = myEffect[effect]
    console.log(`%c${effect}`, 'color: white; background: navy;');

    if (effect === 'Damage') {
      if (allActions) {
        for (const action of Object.keys(unit.actions)) {
          const damageObj = unit.actions[action].damage
          // Object.keys(damageObj)
          const damageType = getDamageType(damageObj)
          if (!damageType) continue
          // set(damageObj, damageType, [relate, amount])
          console.log(damageType);
          damageObj[damageType] = [relate, amount]
        }

        return
      }
    }

    if (effect === 'MaximumRange') {
      if (allActions) {
        setDamageBonus('all', unitType, [relate, amount])
        return
      }

      const effectObj = myEffect[effect]
      console.log(effectObj);
      for (const action of Object.keys(effectObj)) {
        const { relate, amount } = effectObj[action]
        setDamage(action, 'maxRange', [relate, amount])
      }

    }

    if (effect === 'DamageBonus') {
      if (allActions) {
        console.log(123);
        setDamageBonus('all', unitType, [relate, amount])
        return
      }

      const effectObj = myEffect[effect]

      for (const action of Object.keys(effectObj)) {
        const { relate, amount, unitType } = effectObj[action]
        setDamageBonus(action, unitType, [relate, amount])
      }
    }
  }

  function getDamageType(damageObj) {
    if (damageObj.Siege) return 'Siege'

    if (damageObj.Hand) return 'Hand'

    if (damageObj.Ranged) return 'Ranged'
  }

  function setDamage(target, type, newValue) {
    if (target !== 'all') {
      const damageObj = unit.actions[target].damage
      damageObj[type] = newValue
      return
    }

    for (const action of Object.keys(unit.actions)) {
      const damageObj = unit.actions[action].damage
      damageObj[type] = newValue
    }
  }

  function setDamageBonus(target, type, newValue) {
    if (target !== 'all') {
      const damageObj = unit.actions[target].bonus
      // if (!damageObj) {
      //   Object.defineProperty(damageObj, type, { value: 1 })
      // }

      damageObj[type] = newValue
      return
    }

    for (const action of Object.keys(unit.actions)) {
      const damageObj = unit.actions[action].bonus
      if (!damageObj) continue

      if (!damageObj[type]) {
        Object.defineProperty(damageObj, type, { value: 1 })
      }

      damageObj[type] = newValue
      console.log(newValue);
    }
  }
}

// function useUpdate() {
//   const srcUnit = createUnit(unitName)
//   const updateWeakMap = reactive(new WeakMap())

//   function get(target, key) {
//     const update = updateWeakMap.get(target)
//     if (!update) return target[key]

//     const updateValue = update.get(key)
//     if (!updateValue) return target[key]

//     return update.get(key).value
//   }

//   function set(target, key, newValue) {
//     if (!updateWeakMap.get(target)) {
//       const keyMap = new Map()
//       updateWeakMap.set(target, keyMap)
//     }

//     const keyMap = updateWeakMap.get(target)

//     if (!keyMap.get(key)) {
//       keyMap.set(key, useUp(target[key]))
//       console.log();
//     }

//     console.log(updateWeakMap);
//     keyMap.get(key).value = newValue
//   }

//   // function getForce(target, key) {
//   //   if (updateWeakMap.get(target)) {
//   //     update.get(key).value
//   //   }

//   //   const keyMap = new Map()
//   //   updateWeakMap.set(target, keyMap)
//   //   return updateWeakMap.get(target).get(key).value
//   // }

//   return { srcUnit, get, set }
// }

function useTt() {
  const srcUnit = createUnit(unitName)
  const updateWeakMap = reactive(new WeakMap())
  // 用于保存返回的Proxy，避免重复代理，提高性能
  const proxyMap = new WeakMap();

  const handler = {
    get(target, key) {
      const result = Reflect.get(target, key)

      if (isObject(result)) {
        if (!proxyMap.has(result)) {
          proxyMap.set(result, new Proxy(result, handler));
        }

        return proxyMap.get(result);
      }

      const update = updateWeakMap.get(target)
      if (!update) return target[key]

      const updateValue = update.get(key)
      if (!updateValue) return target[key]

      return update.get(key).value
    },
    set(target, key, newValue) {
      // if (!Array.isArray(newValue)) {
      //   // console.log(target, key, newValue);
      //   // Reflect.set(target, key, newValue)
      //   target[key] = newValue
      //   return true
      // }


      setComputeValue(target, key)
      updateWeakMap.get(target).get(key).value = newValue
      // console.log(updateWeakMap);
      return true
    },
    defineProperty(target, property, descriptor) {
      target[property] = descriptor.value

      setComputeValue(target, property)
      return true
    },
  }

  function setComputeValue(target, key) {
    if (!updateWeakMap.get(target)) {
      const keyMap = new Map()
      updateWeakMap.set(target, keyMap)
    }

    const keyMap = updateWeakMap.get(target)

    if (!keyMap.get(key)) {
      keyMap.set(key, useUp(target[key]))
    }
  }

  return new Proxy(srcUnit, handler)
}

const unitName = location.hash.slice(1) || 'Musketeer'
const unit = useTt()

const civList = getUnitCiv(unitName)
console.log(civList);

const techs = ref(createTech(civList[0], unitName, ...unit.type))

console.log(unit.actions);

// const observer = new MutationObserver(mutations => {
//   console.log(mutations)
//   console.log(document.clientHeight);
// });
// console.dir(document);
// observer.observe(document.documentElement, {
//   attributes: true,
//   attributeFilter: ['style']
// });

const observer = new MutationObserver(mutations => {
  console.log(document.documentElement.clientHeight);
});
// console.dir(document.documentElement)
observer.observe(document.documentElement, {
  attributes: true,
  // attributeFilter: ['offsetHeight']
});

// const root = ref(document.documentElement)

// watchEffect(() => {
//   console.log(root.value.clientWidth)
// })
// window.onresize = () => {
//   console.log(document.documentElement.clientHeight);
// }
// document.documentElement.offsetHeight = 666
// document.documentElement.style.padding = '10px';
// 此处调用 disconnect 非常重要
// observer.disconnect();
// watchEffect(() => {
//   console.log(document.documentElement.clientHeight)
// })
// watchEffect(() => {
//   console.log(document.documentElement.offsetHeight);
// })
// onUpdated(() => {
//   console.log(123);
//   console.log(document.documentElement.clientHeight);
// })
document.addEventListener('resize', () => {
  console.log("Resource conscious resize callback!");
});
onMounted(() => {
  const root = ref(document.documentElement)

  watchEffect(() => {
    console.log(root.value.clientWidth)
  })
  // set(srcUnit, 'los', ['Absolute', -10])
  // unit.pop = ['Absolute', 2]
  // Object.defineProperty(unit.cost, 'gold', { value: 40 })
  // Object.defineProperty(unit.actions.BowAttack.bonus, 'AbstractArtillery', { value: 1 })
  setTimeout(() => {
    // console.log(tttest);
    // tttest.value = 99
    // unit.actions.StaggerRangedAttack.damage.maxRange = ['Absolute', 3]
    // unit.pop = ['Absolute', 3]
    // unit.los = ['Absolute', 10]
    // unit.cost.gold = 40
    // const cost = unit.cost
    // console.log(cost);

    // unit.actions.BowAttack.bonus.AbstractArtillery = ['Absolute', 1]
    // console.log(unit.actions.BowAttack.bonus.AbstractArtillery);
    // unit.cost.gold = ['Absolute', 10]
    // console.log(unit.cost.gold)
    // unit.cost.food = ['Assign', 0]
    // console.log(unit);
    // console.log(unit.los.value);
    // console.log(unit.los.value);
    // console.log(get(srcUnit, 'pop'));
    // set(srcUnit, 'los', ['Absolute', 10])



    // set(srcUnit, 'pop', ['Absolute', 4])
    // console.log(get(srcUnit, 'pop').value);
  }, 2000);
})

// console.log(unit.actions);
// const {
//   pop,
//   trainPoint,
//   allowedAge,
//   bounty,
//   buildBounty,
//   autoAtkRange,
//   actions,
//   tactic,
// } = unit

if (location.hash) {
  document.title = `${unit.dpName} - 帝国单位手册`
}
</script>

<template>
  <!-- {{ utest.actions.StaggerRangedAttack.damage }} -->
  <!-- {{ utest.pop }}
  {{ utest.los }}
  {{ utest.trainPoint }} -->
  <!-- {{ unit.los }} -->
  <!-- {{ get(srcUnit, 'pop') }}
  {{ get(srcUnit, 'los') }}
  {{ get(srcUnit, 'trainPoint') }} -->
  <div class="unit-item">
    <header class="name">
      <img src="/resources/images/icons/flags/Flag_Spanish.png" alt="">
      <span class="display-name">{{ unit.dpName }}</span>
      <span class="call-name">{{ unitName }}</span>
    </header>
    <div class="basis">
      <img :src="unit.icon" alt="">
    </div>
    <div class="info">
      <div>{{ pageLang('unitInf', 'colon') }}</div>
      <div class="intro">{{ unit.intro }}</div>
      <div>单位标签：</div>
      <Figure :data="unit.typeLang"></Figure>
      <div>价格：</div>
      <Figure :data="unit.cost"></Figure>
      <div>人口：</div>
      <Figure :data="{ Building: unit.pop || 0 }"></Figure>
      <div>训练时间：</div>
      <Figure :data="{ time: unit.trainPoint }"></Figure>
      <div>训练时代：</div>
      <Figure :data="{ [`age${unit.allowedAge || 0}`]: filter('age', unit.allowedAge || 0) }"></Figure>
      <div>击杀奖励：</div>
      <Figure :data="{ exp: unit.bounty }"></Figure>
      <template v-if="unit.buildBounty" >
        <div>建造奖励：</div>
        <Figure :data="{ exp: unit.buildBounty }"></Figure>
      </template>
      <div v-if="unit.autoAtkRange">自动攻击范围：</div>
      <Figure v-if="unit.autoAtkRange" :data="{ range: unit.autoAtkRange }"></Figure>
      <div v-if="unit.los">视野：</div>
      <Figure v-if="unit.los" :data="{ range: unit.los }"></Figure>
    </div>
    <div class="divider">
      <div>战术面板</div>
    </div>
    <!-- :unit="unit" :actions="actions" :tactic="tactic" -->
    <Tactic :actions="unit.actions" :tactic="unit.tactic" />
    <div class="divider">
      <div>升级面板</div>
    </div>
    <Techs :techs="techs" :addTech="addTech" />
  </div>
  <aside>

  </aside>
</template>

<style lang="less" scoped>
.unit-item {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  align-items: start;
  box-sizing: border-box;
  width: 920px;
  border-radius: 16px;
  padding: 36px 42px;
  background: @body-color;
}

.name {
  display: grid;
  grid-template-columns: auto auto;
  grid-column: 1 / 3;
  justify-self: center;
  padding: 12px 0 36px;

  > img {
    height: 54px;
    margin-right: 20px;
    border-radius: 16px;
    grid-row: 1 / 3;
  }

  > .display-name {
    font-size: 1.23rem;
    font-weight: 600;
    align-self: end;
  }

  > .call-name {
    align-self: end;
    color: #666;
  }
}

.basis {
  padding: 0 32px;

  > img {
    height: 180px;
    border-radius: 26px;
  }
}

.info {
  display: grid;
  grid-template-columns: 9rem auto;
  gap: 12px 36px;

  > div {
    line-height: 1.6rem;

    &:nth-child(2n + 1) {
      text-align: end;
      color: #666;
    }
  }

  > .intro {
    white-space: pre-wrap;
  }
}

.tactic-item,
.techs-item {
  grid-column: 2;
  // margin-top: 32px;
  // border-top: 2px solid;
  padding: 32px 64px;
}

.title-line {
  grid-column: 2;
  position: relative;
  margin-top: 32px;
  text-align: center;
  width: 100%;

  div {
    color: #888;

    &::after,
    &::before {
      position: absolute;
      top: 50%;
      background: #888;
      content: "";
      height: 2px;
      width: 40%;
    }

    &::before {
      left: 10px;
    }

    &::after {
      right: 10px;
    }
  }
}

.divider {
  grid-column: 2;
  width: 100%;
  margin: 48px 0 18px;
  border: 1px solid #888;

  div {
    color: #888;
    position: absolute;
    transform: translate(90px, -50%);
    padding: 0 20px;
    background: @body-color;
  }
}

aside {
  width: 180px;
  border-radius: 16px;
  padding: 20px 0;
  background: #fff;
}
</style>