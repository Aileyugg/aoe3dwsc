import civs from '../assets/civs.json'
import langData from '../assets/chs.json'
import units from '../assets/units.json'
import tactics from '../assets/tactics.json'
import techs from '../assets/techs.json'
import { iconAry } from '../modules/global.js'

import {
  age as ageLangMap,
  type as typeLangMap,
  action as actionLangMap,
  html as pageLangMap,
} from '../assets/langMap.json'

import { civsAry } from '../modules/global.js'

// const isString = (val) => typeof val === 'string';
// const isObject = (val) => val !== null && typeof val === 'object';
export function createCiv(civ) {
  const civData = civs[civ]

  return {
    ...civData,
    dpName: lang(civData.dpName),
    icon: `/${civData.icon}`,
    intro: lang(civData.intro)
  } 
}

export function initCiv(civ) {
  function techRecursive(tech) {
    const techObj = techs[tech]
    const enableUnit = techObj.enable

    if (enableUnit) {
      unitsList = [...unitsList, ...enableUnit]
    }

    const obtainTech = techObj.obtain

    if (obtainTech) {
      techsList = [...techsList, ...obtainTech]
    }

    const activeTech = techObj.active
    if (!activeTech) return

    for (const tech of activeTech) {
      techRecursive(tech)
    }
  }

  let unitsList = []
  let techsList = []
  const age0Tech = civs[civ].agetech.Age0
  if (!age0Tech) return

  techRecursive(age0Tech)
  return { unitsList, techsList }
}

function getUnitCiv(unit) {
  const civList = []

  for (const civ of civsAry) {
    const { unitsList } = initCiv(civ)

    if (unitsList.includes(unit)) {
      civList.push(civ)
    }
  }

  if (civList.length === 0) {
    return civsAry
  }

  return civList
}

export function filter(type, value) {
  // const civIcon = '/resources/images/icons/flags/'
  switch (type) {
    case('civIcon'): return `/${civs[value].icon}`
    // case('civFill'): return civIcon + value
    case('age'): return lang(ageLangMap[`Age${value}`])
  }
}

/**
 * 根据语言的ID获取语言的字符串
 * @param {Number} langId 
 * @returns {String}
 */
export function lang(langId) {
  if (!langId) return
  return langData[langId]
}

export function pageLang(...value) {
  let string = ''

  for (const item of value) {
    string += lang(pageLangMap[item])
  }

  return string
}

export function locateIcon(icon) {
  if (!iconAry.includes(icon)) return
  return `/images/${icon}.png`
}

export function createUnit(name) {
  const srcData = units[name]
  const { actions, damage, dmgBonus ,...partData } = srcData

  return {
    ...partData,
    dpName: lang(srcData.dpName),
    intro: lang(srcData.intro),
    icon: `/${srcData.icon}`,
    actions: getAction(actions, damage, dmgBonus),
    tactic: tactics[srcData.tactic],
    typeLang: getType(srcData.type),
  }
}

export function createTech(civ, ...types) {
  console.log(civ);
  const allowTechs = initCiv(civ).techsList
  console.log(allowTechs);
  const techAry = []

  for (const [key, tech] of Object.entries(techs)) {
    if (!allowTechs.includes(key)) continue

    const effects = tech.effects
    if (!effects) continue

    tech.name = key
    let myEffect = {}
    const effectAry = Object.keys(effects)

    for (const effect of effectAry) {
      if (!types.includes(effect)) continue
      myEffect = { ...myEffect, ...effects[effect]}
    }

    if (Object.keys(myEffect).length === 0) continue

    tech.myEffect = myEffect
    techAry.push(tech)
  }

  return techAry
}

function getType(types) {
  const typeObj = {}
  
  for (const type of types) {
    const typeLang = lang(typeLangMap[type])
    if (typeLang) {
      typeObj[type] = typeLang
    }
  }

  return typeObj
}

function getAction(actions, damages, dmgBonus) {
  if (!actions) return
  const actionsObj = {}

  for (const action of Object.keys(actions)) {
    let damage
    let bonus
    const [damageIndex, bonusIndex] = actions[action]
    const dpName = lang(actionLangMap[action])

    if (damageIndex !== null) {
      damage = { ...damages[damageIndex] }
    } else continue

    if (bonusIndex !== null) {
      bonus = { ...dmgBonus[bonusIndex] }
    }

    actionsObj[action] = {
      dpName,
      damage,
      bonus
    }
  }

  return actionsObj
}

export { getUnitCiv }