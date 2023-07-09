import units from '../assets/units.json'
import {
  type as typeLangMap,
  action as actionLangMap,
} from '../assets/langMap.json'

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

export function refData(target, key) {
  const updateKey = `_${key}`
  const updateAry = target[updateKey]

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
      damage = damages[damageIndex]
    } else continue

    if (bonusIndex !== null) {
      bonus = dmgBonus[bonusIndex]
    }

    actionsObj[action] = {
      dpName,
      damage,
      bonus
    }
  }

  return actionsObj
}