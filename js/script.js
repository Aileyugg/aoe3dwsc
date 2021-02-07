window.onload = function () {
    var headVm = new Vue({
        el: "#title"
    })
    var title = headVm.$el.innerText
    //console.log(units["Cacadore"].displayname)
    for (var unit in units) {
        if (title == units[unit].displayname){
            var Food = Wood = Gold = populationcount = 0
            var shortrollovertext = units[unit].shortrollovertext
            var rollovertext = units[unit].rollovertext
            var portraiticon = "../"+units[unit].portraiticon
            var populationcount = units[unit].populationcount
            var trainpoints = units[unit].trainpoints
            var initialhitpoints = units[unit].initialhitpoints
            var maxvelocity = units[unit].maxvelocity
            var unittype = units[unit].unittype
            console.log(unittype)
            //console.log(units[unit].resourceDict[0][0])
            //console.log(units[unit].armorDict.length)
            for (var i = 0; i < units[unit].resourceDict.length; i++) {
                if (units[unit].resourceDict[i][0] == "Food") {
                    Food = units[unit].resourceDict[i][1]
                }
                if (units[unit].resourceDict[i][0] == "Wood") {
                    Wood = units[unit].resourceDict[i][1]
                }
                if (units[unit].resourceDict[i][0] == "Gold") {
                    Gold = units[unit].resourceDict[i][1]
                }
            }
            if (units[unit].armorDict[0][0] == "Hand") {
                var armorType = "../images/stat_icon_attack.png"
                //console.log(1)
            }
            if (units[unit].armorDict[0][0] == "Ranged") {
                var armorType = "../images/stat_icon_ranged.png"
            }
            if (units[unit].armorDict[0][0] == "Siege") {
                var armorType = "../images/stat_icon_siege.png"
            }
            var armorValue = units[unit].armorDict[0][1]
            //console.log(units[unit])
            var raValue = units[unit].StaggerRangedAttack[0]
            var raRange = units[unit].StaggerRangedAttack[2]
            var raRof = units[unit].StaggerRangedAttack[1]
            var raArr = new Array() 
            for (var raKey in units[unit].StaggerRangedAttack.slice(-1)[0]) {
                if (raKey == "AbstractCavalry" || raKey == "AbstractHeavyCavalry") {
                    raArr.push ({
                        arrValue: parseFloat(units[unit].StaggerRangedAttack.slice(-1)[0][raKey]),
                        arrIcon: "../images/stat_icon_cavalry.png"
                    })
                }
                //console.log(raKey)
                if (raKey == "AbstractLightInfantry") {
                    raArr.push ({
                        arrValue: parseFloat(units[unit].StaggerRangedAttack.slice(-1)[0][raKey]),
                        arrIcon: "../images/stat_light_infantry.png"
                    })
                }
                if (raKey == "AbstractHeavyInfantry") {
                    raArr.push({
                        arrValue: parseFloat(units[unit].StaggerRangedAttack.slice(-1)[0][raKey]),
                        arrIcon: "../images/stat_icon_heavy_infantry.png"
                    })
                }
                if (raKey == "AbstractLightCavalry") {
                    raArr.push({
                        arrValue: parseFloat(units[unit].StaggerRangedAttack.slice(-1)[0][raKey]),
                        arrIcon: "../images/stat_light_cav.png"
                    })
                }
                if (raKey == "AbstractArtillery") {
                    raArr.push({
                        arrValue: parseFloat(units[unit].StaggerRangedAttack.slice(-1)[0][raKey]),
                        arrIcon: "../images/stat_icon_artillery.png"
                    })
                }
                if (raKey == "AbstractVillager") {
                    raArr.push({
                        arrValue: parseFloat(units[unit].StaggerRangedAttack.slice(-1)[0][raKey]),
                        arrIcon: "../images/stat_icon_villager.png"
                    })
                }
                if (raKey == "AbstractSiegeTrooper") {
                    raArr.push({
                        arrValue: parseFloat(units[unit].StaggerRangedAttack.slice(-1)[0][raKey]),
                        arrIcon: "../images/stat_icon_siege_troop.png"
                    })
                }
            }
            var haValue = units[unit].StaggerHandAttack[0]
            var haRof = units[unit].StaggerHandAttack[1]
            var haArr = new Array()
            for (var haKey in units[unit].StaggerHandAttack.slice(-1)[0]) {
                if (haKey == "AbstractCavalry" || haKey == "AbstractHeavyCavalry") {
                    haArr.push({
                        arrValue: parseFloat(units[unit].StaggerHandAttack.slice(-1)[0][haKey]),
                        arrIcon: "../images/stat_icon_cavalry.png"
                    })
                }
                if (haKey == "AbstractLightInfantry") {
                    haArr.push({
                        arrValue: parseFloat(units[unit].StaggerHandAttack.slice(-1)[0][haKey]),
                        arrIcon: "../images/stat_light_infantry.png"
                    })
                }
                if (haKey == "AbstractHeavyInfantry") {
                    haArr.push({
                        arrValue: parseFloat(units[unit].StaggerHandAttack.slice(-1)[0][haKey]),
                        arrIcon: "../images/stat_icon_heavy_infantry.png"
                    })
                }
                if (haKey == "AbstractLightCavalry") {
                    haArr.push({
                        arrValue: parseFloat(units[unit].StaggerHandAttack.slice(-1)[0][haKey]),
                        arrIcon: "../images/stat_light_cav.png"
                    })
                }
                if (haKey == "AbstractArtillery") {
                    haArr.push({
                        arrValue: parseFloat(units[unit].StaggerHandAttack.slice(-1)[0][haKey]),
                        arrIcon: "../images/stat_icon_artillery.png"
                    })
                }
                if (haKey == "AbstractVillager") {
                    haArr.push({
                        arrValue: parseFloat(units[unit].StaggerHandAttack.slice(-1)[0][haKey]),
                        arrIcon: "../images/stat_icon_villager.png"
                    })
                }
            }
            if (raArr.length == 0) {
                var raHeight = "height: 0;"
            }
            if (haArr.length == 0) {
                var haHeight = "height: 0;"
            }
            var vaValue = units[unit].BuildingAttack[0]
            var vaRof = units[unit].BuildingAttack[1]
            //console.log(raArr)
        }
    }
    //console.log(Food)
    var bodyVm = new Vue({
        el: "#body",
        data: {
            name: title,
            shortrollovertext: shortrollovertext,
            rollovertext: rollovertext,
            portraiticon: portraiticon,
            populationcount: populationcount,
            trainpoints: parseInt(trainpoints),
            initialhitpoints: parseInt(initialhitpoints),
            maxvelocity: parseFloat(maxvelocity),
            food: parseInt(Food),
            wood: parseInt(Wood),
            gold: parseInt(Gold),
            armor: {type: armorType, value: parseFloat(armorValue)},
            raHeight: raHeight,
            rangedAttack: {
                value: parseInt(raValue),
                range: parseInt(raRange),
                rof: parseFloat(raRof),
                arr: raArr
            },
            haHeight: haHeight,
            handAttack: {
                value: parseInt(haValue),
                rof: parseFloat(haRof),
                arr: haArr
            },
            buildingAttack: {
                value: parseInt(vaValue),
                rof: parseFloat(vaRof)
            },
            unittype: unittype
        },
        methods: {
            liClick: function () {
                if (this.$refs.button.innerText == "关闭单位介绍") {
                    this.$refs.list.style.display = "none"
                    this.$refs.button.innerText = "打开单位介绍"
                }
                else {
                    this.$refs.list.style.display = "block"
                    this.$refs.button.innerText = "关闭单位介绍"
                }
            }
        }
    })
}
	
	