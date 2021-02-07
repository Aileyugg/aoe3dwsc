var units = {
	"Musketeer": {
		"displayname": "火枪兵",
		"shortrollovertext": "重装远程步兵",
		"rollovertext": "重装远程步兵，装备有一把刺刀来攻击骑兵。",
		"portraiticon": "resources\\art\\units\\infantry_ranged\\musketeer\\musketeer_portrait.png",
		"populationcount": "1",
		"trainpoints": "30.0000",
		"initialhitpoints": "150.0000",
		"maxvelocity": "4.0000",
		"resourceDict": [
			["Food", "75.0000"],
			["Gold", "25.0000"]
		],
		"armorDict": [
			["Hand", "0.2000"]
		],
		"StaggerRangedAttack": ["23.000000", "3.000000", "12.000000", {}],
		"StaggerHandAttack": ["13.000000", "1.500000", {
			"AbstractCavalry": "3.000000",
			"AbstractLightInfantry": "2.250000"
		}],
		"BuildingAttack": ["20.000000", "3.000000"],
		"unittype": ["步兵", "重装步兵", "枪炮步兵", "远程步兵"]
	},
	"Crossbowman": {
		"displayname": "弩手",
		"shortrollovertext": "步弓手",
		"rollovertext": "古老的步弓手单位，擅长对付步兵。",
		"portraiticon": "resources\\art\\units\\infantry_ranged\\crossbow\\crossbow_portrait.png",
		"populationcount": "1",
		"trainpoints": "27.0000",
		"initialhitpoints": "100.0000",
		"maxvelocity": "4.0000",
		"resourceDict": [
			["Food", "40.0000"],
			["Wood", "40.0000"]
		],
		"armorDict": [
			["Ranged", "0.2000"]
		],
		"StaggerRangedAttack": ["16.000000", "3.000000", "16.000000", {
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractCavalry": "0.750000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractHeavyInfantry": "1.250000"
		}],
		"StaggerHandAttack": ["7.000000", "1.500000", {
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractCavalry": "0.750000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractHeavyInfantry": "1.250000"
		}],
		"BuildingAttack": ["8.000000", "3.000000"],
		"unittype": ["弓兵", "步兵", "远程步兵"]
	},
	"Skirmisher": {
		"displayname": "长枪兵",
		"shortrollovertext": "长枪兵",
		"rollovertext": "长枪兵，生命值较低，但是攻击范围广，并且擅长对付步兵。",
		"portraiticon": "resources\\art\\units\\infantry_ranged\\skirmisher\\skirmisher_portrait.png",
		"populationcount": "1",
		"trainpoints": "33.0000",
		"initialhitpoints": "120.0000",
		"maxvelocity": "4.0000",
		"resourceDict": [
			["Food", "50.0000"],
			["Gold", "65.0000"]
		],
		"armorDict": [
			["Ranged", "0.3000"]
		],
		"StaggerRangedAttack": ["15.000000", "3.000000", "20.000000", {
			"AbstractHeavyInfantry": "2.000000",
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"StaggerHandAttack": ["6.000000", "1.500000", {
			"AbstractHeavyInfantry": "2.000000",
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"BuildingAttack": ["12.000000", "3.000000"],
		"unittype": ["远程步兵", "枪炮步兵", "步兵"]
	},
	"Longbowman": {
		"displayname": "长弓兵",
		"shortrollovertext": "步弓手",
		"rollovertext": "古老的远程步弓手单位，擅长对付步兵。",
		"portraiticon": "resources\\art\\units\\infantry_ranged\\longbow\\longbow_portrait.png",
		"populationcount": "1",
		"trainpoints": "30.0000",
		"initialhitpoints": "95.0000",
		"maxvelocity": "4.0000",
		"resourceDict": [
			["Food", "60.0000"],
			["Wood", "40.0000"]
		],
		"armorDict": [
			["Ranged", "0.3000"]
		],
		"StaggerRangedAttack": ["17.000000", "1.500000", "22.000000", {
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractHeavyInfantry": "1.250000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"StaggerHandAttack": ["11.000000", "1.500000", {
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractHeavyInfantry": "1.250000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"BuildingAttack": ["10.000000", "3.000000"],
		"unittype": ["弓兵", "步兵", "远程步兵"]
	},
	"Strelet": {
		"displayname": "俄国长枪兵",
		"shortrollovertext": "长枪兵",
		"rollovertext": "攻击力较弱但是训练成本较低的长枪兵，擅长对付步兵。",
		"portraiticon": "resources\\art\\units\\infantry_ranged\\strelet\\strelet_portrait.png",
		"populationcount": "1",
		"trainpoints": "30.0000",
		"initialhitpoints": "90.0000",
		"maxvelocity": "4.5000",
		"resourceDict": [
			["Food", "50.0000"],
			["Wood", "10.0000"]
		],
		"armorDict": [
			["Ranged", "0.3000"]
		],
		"StaggerRangedAttack": ["10.000000", "3.000000", "14.000000", {
			"AbstractHeavyInfantry": "2.000000",
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"StaggerHandAttack": ["5.000000", "1.500000", {
			"AbstractHeavyInfantry": "2.000000",
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"BuildingAttack": ["9.000000", "3.000000"],
		"unittype": ["枪炮步兵", "远程步兵", "步兵"]
	},
	"Janissary": {
		"displayname": "奥斯曼火枪兵",
		"shortrollovertext": "重装远程步兵",
		"rollovertext": "威力强大的奥斯曼步兵，类似于威力强大的火枪兵。",
		"portraiticon": "resources\\art\\units\\infantry_ranged\\janissary\\janissary_icon_128.png",
		"populationcount": "1",
		"trainpoints": "34.0000",
		"initialhitpoints": "210.0000",
		"maxvelocity": "4.0000",
		"resourceDict": [
			["Food", "90.0000"],
			["Gold", "25.0000"]
		],
		"armorDict": [
			["Hand", "0.2000"]
		],
		"StaggerRangedAttack": ["20.000000", "3.000000", "12.000000", {}],
		"StaggerHandAttack": ["15.000000", "1.500000", {
			"AbstractCavalry": "2.000000",
			"AbstractLightInfantry": "1.500000"
		}],
		"BuildingAttack": ["25.000000", "3.000000"],
		"unittype": ["重装步兵", "步兵", "远程步兵", "枪炮步兵"]
	},
	"Minuteman": {
		"displayname": "民兵",
		"shortrollovertext": "速战速决的远程步兵",
		"rollovertext": "训练速度快的火枪兵，但生命值会随时间快速减少，攻击力也会随之下降。",
		"portraiticon": "resources\\art\\units\\infantry_ranged\\minuteman\\minuteman_portrait.png",
		"populationcount": "1",
		"trainpoints": "2.0000",
		"initialhitpoints": "200.0000",
		"maxvelocity": "4.0000",
		"resourceDict": [
			["Food", "75.0000"]
		],
		"armorDict": [
			["Hand", "0.2000"]
		],
		"StaggerRangedAttack": ["26.000000", "3.000000", "12.000000", {
			"AbstractSiegeTrooper": "2.000000"
		}],
		"StaggerHandAttack": ["13.000000", "1.500000", {
			"AbstractSiegeTrooper": "2.000000"
		}],
		"BuildingAttack": ["5.000000", "3.000000"],
		"unittype": ["步兵", "远程步兵"]
	},
	"Cacadore": {
		"displayname": "老练葡萄牙长枪兵",
		"shortrollovertext": "长枪兵",
		"rollovertext": "长枪兵，生命值较低，但是攻击力强大，并且擅长对付步兵。",
		"portraiticon": "resources\\art\\units\\infantry_ranged\\cacadore\\cacadore_portrait.png",
		"populationcount": "1",
		"trainpoints": "33.0000",
		"initialhitpoints": "110.0000",
		"maxvelocity": "4.5000",
		"resourceDict": [
			["Food", "80.0000"],
			["Gold", "35.0000"]
		],
		"armorDict": [
			["Ranged", "0.4500"]
		],
		"StaggerRangedAttack": ["18.000000", "3.000000", "20.000000", {
			"AbstractHeavyInfantry": "2.000000",
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"StaggerHandAttack": ["5.000000", "1.500000", {
			"AbstractHeavyInfantry": "2.000000",
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"BuildingAttack": ["12.000000", "3.000000"],
		"unittype": ["远程步兵", "枪炮步兵", "步兵"]
	},
	"MercHighlander": {
		"displayname": "高地兵",
		"shortrollovertext": "远程雇佣步兵",
		"rollovertext": "威力强大的火枪兵，来自苏格兰。",
		"portraiticon": "resources\\art\\units\\mercenaries\\highlander\\highlander_portrait.png",
		"populationcount": "2",
		"trainpoints": "40.0000",
		"initialhitpoints": "400.0000",
		"maxvelocity": "4.0000",
		"resourceDict": [
			["Gold", "200.0000"]
		],
		"armorDict": [
			["Hand", "0.4000"]
		],
		"StaggerRangedAttack": ["63.000000", "3.000000", "12.000000", {}],
		"StaggerHandAttack": ["32.000000", "1.500000", {
			"AbstractCavalry": "2.000000",
			"AbstractLightInfantry": "1.500000"
		}],
		"BuildingAttack": ["40.000000", "3.000000"],
		"unittype": ["枪炮步兵", "远程步兵", "步兵", "重装步兵"]
	},
	"MercJaeger": {
		"displayname": "德国步枪兵",
		"shortrollovertext": "雇佣长枪兵",
		"rollovertext": "赫斯长枪雇佣兵，擅长对付步兵。",
		"portraiticon": "resources\\art\\units\\mercenaries\\jaeger\\hessian_jaeger_portrait.png",
		"populationcount": "2",
		"trainpoints": "38.0000",
		"initialhitpoints": "250.0000",
		"maxvelocity": "4.0000",
		"resourceDict": [
			["Gold", "200.0000"]
		],
		"armorDict": [
			["Ranged", "0.4000"]
		],
		"StaggerRangedAttack": ["30.000000", "3.000000", "20.000000", {
			"AbstractHeavyInfantry": "2.000000",
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"StaggerHandAttack": ["15.000000", "1.500000", {
			"AbstractHeavyInfantry": "2.000000",
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"BuildingAttack": ["18.000000", "3.000000"],
		"unittype": ["远程步兵", "枪炮步兵", "步兵"]
	},
	"xpTomahawk": {
		"displayname": "战斧兵",
		"shortrollovertext": "能造成近战伤害的重装远程步兵。",
		"rollovertext": "在战斗中挥舞战斧的豪德诺索尼战士。擅长对付骑兵。",
		"portraiticon": "resources\\art\\units\\IRO_tomahawk_portrait.png",
		"populationcount": "1",
		"trainpoints": "30.0000",
		"initialhitpoints": "150.0000",
		"maxvelocity": "4.0000",
		"resourceDict": [
			["Food", "75.0000"],
			["Wood", "25.0000"]
		],
		"armorDict": [
			["Hand", "0.2000"]
		],
		"StaggerRangedAttack": ["30.000000", "3.000000", "20.000000", {
			"AbstractHeavyInfantry": "2.000000",
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"StaggerHandAttack": ["15.000000", "1.500000", {
			"AbstractHeavyInfantry": "2.000000",
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"BuildingAttack": ["20.000000", "3.000000"],
		"unittype": ["远程步兵", "枪炮步兵", "步兵", "重装步兵"]
	},
	"xpAenna": {
		"displayname": "艾那弓箭步兵",
		"shortrollovertext": "步弓手",
		"rollovertext": "弓箭手，擅长对付步兵。",
		"portraiticon": "resources\\art\\units\\iro_aenna_portrait.png",
		"populationcount": "1",
		"trainpoints": "27.0000",
		"initialhitpoints": "110.0000",
		"maxvelocity": "5.0000",
		"resourceDict": [
			["Food", "100.0000"]
		],
		"armorDict": [
			["Ranged", "0.3000"]
		],
		"StaggerRangedAttack": ["12.000000", "1.500000", "16.000000", {
			"AbstractHeavyInfantry": "2.000000",
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"StaggerHandAttack": ["8.000000", "1.500000", {
			"AbstractHeavyInfantry": "2.000000",
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"BuildingAttack": ["12.000000", "3.000000"],
		"unittype": ["弓兵", "步兵", "远程步兵"]
	},
	"xpMusketWarrior": {
		"displayname": "森林游荡者",
		"shortrollovertext": "长枪兵",
		"rollovertext": "可隐秘行动的远程步兵，擅长对付步兵和突袭敌人。",
		"portraiticon": "resources\\art\\units\\iro_forrest_runner_portrait.png",
		"populationcount": "1",
		"trainpoints": "33.0000",
		"initialhitpoints": "110.0000",
		"maxvelocity": "4.0000",
		"resourceDict": [
			["Food", "50.0000"],
			["Gold", "65.0000"]
		],
		"armorDict": [
			["Ranged", "0.3000"]
		],
		"StaggerRangedAttack": ["16.000000", "3.000000", "20.000000", {
			"AbstractHeavyInfantry": "2.000000",
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"StaggerHandAttack": ["7.000000", "1.500000", {
			"AbstractHeavyInfantry": "2.000000",
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"BuildingAttack": ["12.000000", "3.000000"],
		"unittype": ["远程步兵", "枪炮步兵", "步兵"]
	},
	"xpWarBow": {
		"displayname": "鹰神弓箭手",
		"shortrollovertext": "步弓手",
		"rollovertext": "步弓手单位，擅长对付步兵。",
		"portraiticon": "resources\\art\\units\\sx_warbow_portrait.png",
		"populationcount": "1",
		"trainpoints": "30.0000",
		"initialhitpoints": "100.0000",
		"maxvelocity": "4.5000",
		"resourceDict": [
			["Food", "65.0000"],
			["Wood", "35.0000"]
		],
		"armorDict": [
			["Ranged", "0.3000"]
		],
		"StaggerRangedAttack": ["15.000000", "1.500000", "16.000000", {
			"AbstractHeavyInfantry": "2.000000",
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"StaggerHandAttack": ["10.000000", "1.500000", {
			"AbstractHeavyInfantry": "2.000000",
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"BuildingAttack": ["10.000000", "3.000000"],
		"unittype": ["远程步兵", "弓兵", "步兵"]
	},
	"xpMacehualtin": {
		"displayname": "奥托米掷石绳兵",
		"shortrollovertext": "投石手",
		"rollovertext": "投石手，擅长对付重装步兵。",
		"portraiticon": "resources\\art\\units\\az_macehuatlin_portrait.png",
		"populationcount": "1",
		"trainpoints": "23.0000",
		"initialhitpoints": "80.0000",
		"maxvelocity": "4.5000",
		"resourceDict": [
			["Food", "40.0000"],
			["Wood", "30.0000"]
		],
		"armorDict": [
			["Ranged", "0.3000"]
		],
		"StaggerRangedAttack": ["8.000000", "1.500000", "16.000000", {
			"AbstractHeavyInfantry": "2.000000",
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"StaggerHandAttack": ["4.000000", "1.500000", {
			"AbstractHeavyInfantry": "2.000000",
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"BuildingAttack": ["7.000000", "3.000000"],
		"unittype": ["弓兵", "步兵", "远程步兵"]
	},
	"xpWarRifle": {
		"displayname": "瓦其那步枪兵",
		"shortrollovertext": "长枪兵",
		"rollovertext": "轻型步兵单位，生命值低，但射程很长。擅长对付步兵。",
		"portraiticon": "resources\\art\\units\\sx_warrifle_portrait.png",
		"populationcount": "1",
		"trainpoints": "29.0000",
		"initialhitpoints": "85.0000",
		"maxvelocity": "4.0000",
		"resourceDict": [
			["Food", "60.0000"],
			["Gold", "40.0000"]
		],
		"armorDict": [
			["Ranged", "0.3000"]
		],
		"StaggerRangedAttack": ["16.000000", "3.000000", "18.000000", {
			"AbstractHeavyInfantry": "2.000000",
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"StaggerHandAttack": ["7.000000", "1.500000", {
			"AbstractHeavyInfantry": "2.000000",
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"BuildingAttack": ["12.000000", "3.000000"],
		"unittype": ["枪炮步兵", "远程步兵", "步兵"]
	},
	"xpEagleKnight": {
		"displayname": "鹰游击武士",
		"shortrollovertext": "远程突击步兵",
		"rollovertext": "贵族单位，会从掷矛器掷射标枪，擅长对付骑兵及郊狼游击兵。",
		"portraiticon": "resources\\art\\units\\az_eagle_knight_portrait.png",
		"populationcount": "1",
		"trainpoints": "37.0000",
		"initialhitpoints": "180.0000",
		"maxvelocity": "6.0000",
		"resourceDict": [
			["Food", "75.0000"],
			["Gold", "75.0000"]
		],
		"armorDict": [
			["Ranged", "0.3000"]
		],
		"StaggerRangedAttack": ["15.000000", "1.500000", "12.000000", {
			"AbstractHeavyCavalry": "3.000000",
			"AbstractCoyoteMan": "2.000000",
			"AbstractVillager": "0.500000"
		}],
		"StaggerHandAttack": ["9.000000", "1.500000", {
			"AbstractHeavyCavalry": "3.000000",
			"AbstractCoyoteMan": "2.000000"
		}],
		"BuildingAttack": ["8.000000", "3.000000"],
		"unittype": ["远程步兵", "弓兵", "轻型步兵"]
	},
	"xpArrowKnight": {
		"displayname": "弓箭武士",
		"shortrollovertext": "攻城步兵",
		"rollovertext": "可发射火焰之箭的远程贵族单位，擅长对付炮兵和建筑。",
		"portraiticon": "resources\\art\\units\\az_arrow_knight_portrait.png",
		"populationcount": "2",
		"trainpoints": "34.0000",
		"initialhitpoints": "150.0000",
		"maxvelocity": "3.7500",
		"resourceDict": [
			["Food", "50.0000"],
			["Gold", "75.0000"]
		],
		"armorDict": [
			["Ranged", "0.4000"]
		],
		"StaggerRangedAttack": ["10.000000", "1.500000", "30.000000", {
			"AbstractArtillery": "5.000000"
		}],
		"StaggerHandAttack": ["6.000000", "1.500000", {}],
		"BuildingAttack": ["36.000000", "3.000000"],
		"unittype": ["攻城单位", "远程步兵", "步兵", "弓兵"]
	},
	"MercFusilier": {
		"displayname": "燧枪兵",
		"shortrollovertext": "远程雇佣步兵",
		"rollovertext": "威力强大的远程雇佣步兵。",
		"portraiticon": "resources\\art\\units\\fusilier_portrait.png",
		"populationcount": "2",
		"trainpoints": "50.0000",
		"initialhitpoints": "300.0000",
		"maxvelocity": "5.5000",
		"resourceDict": [
			["Gold", "300.0000"]
		],
		"armorDict": [
			["Hand", "0.1000"]
		],
		"StaggerRangedAttack": ["70.000000", "3.000000", "12.000000", {
			"AbstractCavalry": "1.500000",
			"AbstractLightInfantry": "1.300000"
		}],
		"StaggerHandAttack": ["35.000000", "1.500000", {
			"AbstractLightInfantry": "1.500000",
			"AbstractCavalry": "2.000000"
		}],
		"BuildingAttack": ["60.000000", "3.000000"],
		"unittype": ["远程步兵", "枪炮步兵", "步兵", "重装步兵"]
	},
	"xpColonialMilitia": {
		"displayname": "革命军",
		"shortrollovertext": "重装步兵",
		"rollovertext": "优良的全方位步兵单位，擅长对付骑兵。",
		"portraiticon": "resources\\art\\units\\colonial_militia_portrait.png",
		"populationcount": "1",
		"trainpoints": "30.0000",
		"initialhitpoints": "200.0000",
		"maxvelocity": "5.0000",
		"resourceDict": [
			["Food", "100.0000"]
		],
		"armorDict": [
			["Hand", "0.3000"]
		],
		"StaggerRangedAttack": ["24.000000", "3.000000", "12.000000", {
			"AbstractCavalry": "2.000000",
			"AbstractLightInfantry": "1.500000"
		}],
		"StaggerHandAttack": ["12.000000", "1.500000", {
			"AbstractCavalry": "2.000000",
			"AbstractLightInfantry": "1.500000"
		}],
		"BuildingAttack": ["20.000000", "3.000000"],
		"unittype": ["重装步兵", "步兵", "枪炮步兵", "远程步兵"]
	},
	"xpWarrior": {
		"displayname": "战士",
		"shortrollovertext": "速战速决的远程步兵",
		"rollovertext": "训练速度快的原住民防御者，但生命值会随时间快速减少，攻击力也会随之下减。",
		"portraiticon": "resources\\art\\units\\warrior_portrait.png",
		"populationcount": "1",
		"trainpoints": "2.0000",
		"initialhitpoints": "200.0000",
		"maxvelocity": "4.0000",
		"resourceDict": [
			["Food", "75.0000"]
		],
		"armorDict": [
			["Hand", "0.2000"]
		],
		"StaggerRangedAttack": ["26.000000", "3.000000", "12.000000", {
			"AbstractSiegeTrooper": "2.000000"
		}],
		"StaggerHandAttack": ["13.000000", "1.500000", {
			"AbstractSiegeTrooper": "2.000000"
		}],
		"BuildingAttack": ["5.000000", "3.000000"],
		"unittype": ["步兵", "远程步兵"]
	},
	"ypYumi": {
		"displayname": "日本长弓兵",
		"shortrollovertext": "步弓手单位，擅长对付重装步兵",
		"rollovertext": "装备日本长弓的远程步兵单位，擅长对付步兵。",
		"portraiticon": "resources\\art\\units\\asians\\japanese\\yumi\\yumi_icon_portrait.png",
		"populationcount": "1",
		"trainpoints": "28.0000",
		"initialhitpoints": "100.0000",
		"maxvelocity": "4.0000",
		"resourceDict": [
			["Food", "55.0000"],
			["Wood", "50.0000"]
		],
		"armorDict": [
			["Ranged", "0.3000"]
		],
		"StaggerRangedAttack": ["19.000000", "3.000000", "18.000000", {
			"AbstractHeavyInfantry": "1.500000",
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"StaggerHandAttack": ["7.000000", "1.500000", {
			"AbstractHeavyInfantry": "1.500000",
			"xpEagleKnight": "2.000000",
			"AbstractLightCavalry": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"BuildingAttack": ["9.000000", "3.000000"],
		"unittype": ["弓兵", "步兵", "远程步兵"]
	},
	"ypAshigaru": {
		"displayname": "日本火枪步兵",
		"shortrollovertext": "重装远程步兵单位，擅长对付骑兵和近战步兵",
		"rollovertext": "装备火枪的日本重装步兵单位，擅长在近战时攻击骑兵。",
		"portraiticon": "resources\\art\\units\\asians\\japanese\\ashigaru\\ashigaru_icon_portrait.png",
		"populationcount": "1",
		"trainpoints": "33.0000",
		"initialhitpoints": "170.0000",
		"maxvelocity": "4.5000",
		"resourceDict": [
			["Food", "80.0000"],
			["Gold", "40.0000"]
		],
		"armorDict": [
			["Hand", "0.2000"]
		],
		"StaggerRangedAttack": ["24.000000", "3.000000", "12.000000", {}],
		"StaggerHandAttack": ["10.000000", "1.500000", {
			"AbstractCavalry": "3.500000",
			"AbstractLightInfantry": "2.000000"
		}],
		"BuildingAttack": ["21.000000", "3.000000"],
		"unittype": ["重装步兵", "步兵", "枪炮步兵", "远程步兵"]
	},
	"ypChuKoNu": {
		"displayname": "中国连弩兵",
		"shortrollovertext": "步弓手单位，擅长对付重装步兵",
		"rollovertext": "古老的中国弩手单位，发射速率极快，擅长对付步兵。",
		"portraiticon": "resources\\art\\units\\asians\\chinese\\chu_ko_nu\\chu_ko_nu_icon_portrait.png",
		"populationcount": "1",
		"trainpoints": "24.0000",
		"initialhitpoints": "90.0000",
		"maxvelocity": "4.5000",
		"resourceDict": [
			["Food", "85.0000"]
		],
		"armorDict": [
			["Ranged", "0.2000"]
		],
		"StaggerRangedAttack": ["5.000000", "3.000000", "16.000000", {
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractHeavyInfantry": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"StaggerHandAttack": ["6.000000", "1.500000", {
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractHeavyInfantry": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"BuildingAttack": ["3.000000", "3.000000"],
		"unittype": ["远程步兵", "弓兵", "步兵"]
	},
	"ypArquebusier": {
		"displayname": "火绳枪兵",
		"shortrollovertext": "长枪兵单位，擅长对付重装步兵",
		"rollovertext": "装备步枪的中国步兵单位。擅长对付步兵。",
		"portraiticon": "resources\\art\\units\\asians\\chinese\\arquebusier\\arquebusier_icon_portrait.png",
		"populationcount": "1",
		"trainpoints": "27.0000",
		"initialhitpoints": "97.0000",
		"maxvelocity": "4.0000",
		"resourceDict": [
			["Gold", "85.0000"]
		],
		"armorDict": [
			["Ranged", "0.3000"]
		],
		"StaggerRangedAttack": ["14.000000", "3.000000", "20.000000", {
			"AbstractLightCavalry": "2.000000",
			"AbstractHeavyInfantry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"StaggerHandAttack": ["5.000000", "1.500000", {
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractHeavyInfantry": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"BuildingAttack": ["9.000000", "3.000000"],
		"unittype": ["步兵", "枪炮步兵", "远程步兵"]
	},
	"ypMercIronTroop": {
		"displayname": "铁军",
		"shortrollovertext": "雇佣步弓手，擅长对付重装步兵",
		"rollovertext": "中国雇佣步弓手单位，身穿重型护甲，而且擅长对付步兵。",
		"portraiticon": "resources\\art\\units\\asians\\mercenaries\\iron_troop\\iron_troop_icon_portrait.png",
		"populationcount": "2",
		"trainpoints": "40.0000",
		"initialhitpoints": "225.0000",
		"maxvelocity": "4.5000",
		"resourceDict": [
			["Gold", "200.0000"]
		],
		"armorDict": [
			["Ranged", "0.6000"]
		],
		"StaggerRangedAttack": ["25.000000", "1.500000", "16.000000", {
			"AbstractHeavyInfantry": "2.000000",
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"StaggerHandAttack": ["16.000000", "1.500000", {
			"AbstractHeavyInfantry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractLightCavalry": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"BuildingAttack": ["22.000000", "3.000000"],
		"unittype": ["弓兵", "步兵", "远程步兵"]
	},
	"ypSepoy": {
		"displayname": "印度兵",
		"shortrollovertext": "重装远程步兵单位，擅长对付骑兵和近战步兵",
		"rollovertext": "印度重装步兵单位，远程攻击骑兵时会稍占上风，但在近战攻击时骑兵则占有极大的优势。",
		"portraiticon": "resources\\art\\units\\asians\\natives\\sepoy\\sepoy_icon_portrait.png",
		"populationcount": "1",
		"trainpoints": "34.0000",
		"initialhitpoints": "180.0000",
		"maxvelocity": "4.0000",
		"resourceDict": [
			["Food", "90.0000"],
			["Gold", "30.0000"]
		],
		"armorDict": [
			["Hand", "0.2000"]
		],
		"StaggerRangedAttack": ["25.000000", "3.000000", "12.000000", {}],
		"StaggerHandAttack": ["15.000000", "1.500000", {
			"AbstractCavalry": "3.000000",
			"AbstractLightInfantry": "2.250000"
		}],
		"BuildingAttack": ["22.000000", "3.000000"],
		"unittype": ["重装步兵", "步兵", "枪炮步兵", "远程步兵"]
	},
	"ypNatMercGurkha": {
		"displayname": "廓尔喀兵",
		"shortrollovertext": "长枪兵单位，擅长对付重装步兵",
		"rollovertext": "印度长枪兵单位，远程攻击非常精准，擅长对付步兵。",
		"portraiticon": "resources\\art\\units\\asians\\natives\\gurkha\\gurkha_icon_portrait.png",
		"populationcount": "1",
		"trainpoints": "33.0000",
		"initialhitpoints": "115.0000",
		"maxvelocity": "4.0000",
		"resourceDict": [
			["Food", "70.0000"],
			["Gold", "50.0000"]
		],
		"armorDict": [
			["Ranged", "0.3000"]
		],
		"StaggerRangedAttack": ["16.000000", "3.000000", "18.000000", {
			"AbstractHeavyInfantry": "2.000000",
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"StaggerHandAttack": ["6.000000", "1.500000", {
			"AbstractHeavyInfantry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractLightCavalry": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"BuildingAttack": ["12.000000", "3.000000"],
		"unittype": ["远程步兵", "枪炮步兵", "步兵"]
	},
	"ypWokouBlindMonk": {
		"displayname": "倭寇僧侣",
		"shortrollovertext": "准确度奇高的步弓手单位，擅长对付重装步兵",
		"rollovertext": "感觉敏锐的僧侣，擅长对付步兵。",
		"portraiticon": "resources\\art\\units\\asians\\mercenaries\\blind_monk\\blind_monk_icon_portrait.png",
		"populationcount": "3",
		"trainpoints": "33.0000",
		"initialhitpoints": "120.0000",
		"maxvelocity": "4.0000",
		"resourceDict": [
			["Gold", "120.0000"]
		],
		"armorDict": [
			["Ranged", "0.3000"]
		],
		"StaggerRangedAttack": ["13.000000", "3.000000", "18.000000", {
			"AbstractHeavyInfantry": "2.000000",
			"AbstractVillager": "2.500000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"StaggerHandAttack": ["6.000000", "1.500000", {
			"AbstractHeavyInfantry": "2.000000",
			"AbstractVillager": "2.500000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"BuildingAttack": ["13.000000", "3.000000"],
		"unittype": ["弓兵", "步兵", "远程步兵"]
	},
	"ypShinobiHorse": {
		"displayname": "密探",
		"shortrollovertext": "可隐秘行动的步弓手单位，擅长对付重装步兵",
		"rollovertext": "可隐秘行动的远程步兵，擅长对付步兵。",
		"portraiticon": "resources\\art\\units\\asians\\japanese\\shinobi\\shinobi_icon_portrait.png",
		"populationcount": "1",
		"trainpoints": "30.0000",
		"initialhitpoints": "150.0000",
		"maxvelocity": "4.8000",
		"resourceDict": [
			["Food", "30.0000"],
			["Gold", "85.0000"]
		],
		"armorDict": [
			["Ranged", "0.2000"]
		],
		"StaggerRangedAttack": ["20.000000", "3.000000", "14.000000", {}],
		"StaggerHandAttack": ["8.000000", "1.500000", {}],
		"BuildingAttack": ["20.000000", "3.000000"],
		"unittype": ["弓兵", "步兵", "远程步兵", "攻城单位"]
	},
	"ypDacoit": {
		"displayname": "马拉塔土匪",
		"shortrollovertext": "拦路强盗，擅长对付重装步兵",
		"rollovertext": "危险的印度拦路强盗，装备有手枪。",
		"portraiticon": "resources\\art\\units\\asians\\mercenaries\\fugitive_dacoit\\dacoit_icon_portrait.png",
		"populationcount": "5",
		"trainpoints": "50.0000",
		"initialhitpoints": "140.0000",
		"maxvelocity": "4.5000",
		"resourceDict": [
			["Gold", "90.0000"]
		],
		"armorDict": [
			["Hand", "0.3000"]
		],
		"StaggerRangedAttack": ["20.000000", "3.000000", "14.000000", {}],
		"StaggerHandAttack": ["8.000000", "1.500000", {}],
		"BuildingAttack": ["20.000000", "3.000000"],
		"unittype": ["步兵", "重装步兵", "枪炮步兵", "远程步兵"]
	},
	"ypThuggee": {
		"displayname": "马拉塔暴徒",
		"shortrollovertext": "一名恶棍，擅长对付重装步兵",
		"rollovertext": "一名危险的印度恶棍，装备有步枪。",
		"portraiticon": "resources\\art\\units\\asians\\mercenaries\\delinquent_thuggee\\thuggee_icon_portrait.png",
		"populationcount": "6",
		"trainpoints": "50.0000",
		"initialhitpoints": "210.0000",
		"maxvelocity": "4.0000",
		"resourceDict": [
			["Gold", "150.0000"]
		],
		"armorDict": [
			["Ranged", "0.3000"]
		],
		"StaggerRangedAttack": ["20.000000", "3.000000", "14.000000", {}],
		"StaggerHandAttack": ["8.000000", "1.500000", {}],
		"BuildingAttack": ["30.000000", "3.000000"],
		"unittype": ["步兵", "枪炮步兵", "远程步兵"]
	},
	"ypIrregular": {
		"displayname": "非正规军",
		"shortrollovertext": "速战速决的远程步兵",
		"rollovertext": "训练速度快的火枪兵，但生命值会随时间快速减少，攻击力也会随之下降。",
		"portraiticon": "resources\\art\\units\\asians\\shared\\irregular\\asian_irregular_gun_icon_portrait.png",
		"populationcount": "1",
		"trainpoints": "2.0000",
		"initialhitpoints": "130.0000",
		"maxvelocity": "4.0000",
		"resourceDict": [
			["Food", "20.0000"],
			["Gold", "20.0000"]
		],
		"armorDict": [
			["Hand", "0.2000"]
		],
		"StaggerRangedAttack": ["21.000000", "3.000000", "12.000000", {
			"AbstractSiegeTrooper": "2.000000",
			"AbstractVillager": "0.500000"
		}],
		"StaggerHandAttack": ["10.000000", "1.500000", {
			"AbstractSiegeTrooper": "2.000000",
			"AbstractVillager": "0.500000"
		}],
		"BuildingAttack": ["4.000000", "3.000000"],
		"unittype": ["步兵", "远程步兵"]
	},
	"ypMercArsonist": {
		"displayname": "火兵",
		"shortrollovertext": "轻型雇佣炮兵单位，擅长攻击步兵和建筑",
		"rollovertext": "轻型雇佣炮兵单位，可投掷燃烧弹来摧毁建筑，而且还擅长对付步兵。",
		"portraiticon": "resources\\art\\units\\asians\\spc\\arsonist\\arsonist_icon_portrait.png",
		"populationcount": "2",
		"trainpoints": "50.0000",
		"initialhitpoints": "250.0000",
		"maxvelocity": "4.0000",
		"resourceDict": [
			["Gold", "300.0000"]
		],
		"armorDict": [
			["Ranged", "0.5000"]
		],
		"StaggerRangedAttack": ["28.000000", "3.000000", "12.000000", {
			"Building": "1.000000",
			"AbstractLightInfantry": "0.500000",
			"AbstractCavalry": "0.500000"
		}],
		"StaggerHandAttack": ["15.000000", "1.500000", {}],
		"BuildingAttack": ["140.000000", "3.000000"],
		"unittype": ["远程步兵", "攻城单位", "步兵"]
	},
	"deJungleBowman": {
		"displayname": "丛林弓箭手",
		"shortrollovertext": "步弓手",
		"rollovertext": "配有毒箭的步弓手能够造成持续性的中毒伤害。很适合对付重装步兵和轻型远程骑兵。",
		"portraiticon": "resources\\art\\units\\natives\\inca\\bowman_portrait.png",
		"populationcount": "1",
		"trainpoints": "28.0000",
		"initialhitpoints": "90.0000",
		"maxvelocity": "4.5000",
		"resourceDict": [
			["Food", "90.0000"],
			["Wood", "20.0000"]
		],
		"armorDict": [
			["Ranged", "0.2000"]
		],
		"StaggerRangedAttack": ["15.000000", "3.000000", "16.000000", {
			"AbstractHeavyInfantry": "1.750000",
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractCavalry": "0.750000",
			"AbstractCoyoteMan": "0.750000"
		}],
		"StaggerHandAttack": ["10.000000", "1.500000", {
			"AbstractHeavyInfantry": "1.750000",
			"AbstractLightCavalry": "2.000000",
			"xpEagleKnight": "2.000000",
			"AbstractCoyoteMan": "0.750000",
			"AbstractCavalry": "0.750000"
		}],
		"BuildingAttack": ["8.000000", "3.000000"],
		"unittype": ["远程步兵", "弓兵", "步兵"]
	},
	"deBolasWarrior": {
		"displayname": "掷石绳战士",
		"shortrollovertext": "重装远程步兵",
		"rollovertext": "会猛力投出掷石绳的远程攻击战士，攻击范围较广。掷石绳能减慢敌军的速度。擅长对付骑兵。",
		"portraiticon": "resources\\art\\units\\natives\\inca\\bolas_warrior_portrait.png",
		"populationcount": "1",
		"trainpoints": "35.0000",
		"initialhitpoints": "175.0000",
		"maxvelocity": "4.0000",
		"resourceDict": [
			["Food", "35.0000"],
			["Gold", "65.0000"]
		],
		"armorDict": [
			["Ranged", "0.2000"]
		],
		"StaggerRangedAttack": ["18.000000", "3.000000", "14.000000", {
			"AbstractCoyoteMan": "1.600000",
			"AbstractHeavyCavalry": "2.000000",
			"AbstractLightCavalry": "1.500000",
			"xpEagleKnight": "1.500000",
			"xpRifleRider": "0.500000",
			"ypNatRattanShield": "1.600000",
			"ypNatMercRattanShield": "1.600000"
		}],
		"StaggerHandAttack": ["10.000000", "1.500000", {}],
		"BuildingAttack": ["24.000000", "3.000000"],
		"unittype": ["步兵", "重装步兵", "远程步兵"]
	},
	"deCarolean": {
		"displayname": "卡尔远征军",
		"shortrollovertext": "重装远程步兵",
		"rollovertext": "瑞典火枪兵能够快速开火，并且能从远处反击骑兵，还能够使用随身的佩剑发动冲锋。很擅长近战攻击。",
		"portraiticon": "resources\\art\\units\\infantry_ranged\\carolean\\carolean_portrait.png",
		"populationcount": "1",
		"trainpoints": "33.0000",
		"initialhitpoints": "150.0000",
		"maxvelocity": "4.25000",
		"resourceDict": [
			["Food", "60.0000"],
			["Gold", "40.0000"]
		],
		"armorDict": [
			["Hand", "0.3000"]
		],
		"StaggerRangedAttack": ["19.000000", "2.500000", "10.000000", {
			"AbstractHeavyCavalry": "1.500000",
			"AbstractLightCavalry": "1.500000",
			"xpRifleRider": "0.670000",
			"AbstractCoyoteMan": "1.300000",
			"xpEagleKnight": "1.500000",
			"ypNatRattanShield": "1.300000",
			"ypNatMercRattanShield": "1.300000"
		}],
		"StaggerHandAttack": ["19.000000", "1.500000", {
			"AbstractHeavyInfantry": "1.250000",
			"AbstractInfantry": "0.800000"
		}],
		"BuildingAttack": ["20.000000", "3.000000"],
		"unittype": ["步兵", "重装步兵", "枪炮步兵", "远程步兵"]
	},
	"deSPCHornSkirmisher": {
		"displayname": "索马里火绳枪兵",
		"shortrollovertext": "长枪兵",
		"rollovertext": "长枪兵，生命值较低，但是攻击范围广，并且擅长对付步兵。",
		"portraiticon": "resources\\art\\units\\african\\horn_skirmisher_portrait.png",
		"populationcount": "1",
		"trainpoints": "30.0000",
		"initialhitpoints": "100.0000",
		"maxvelocity": "5.500",
		"resourceDict": [
			["Food", "40.0000"],
			["Gold", "75.0000"]
		],
		"armorDict": [
			["Ranged", "0.2000"]
		],
		"StaggerRangedAttack": ["17.000000", "3.000000", "20.000000", {
			"AbstractHeavyInfantry": "3.000000",
			"AbstractLightCavalry": "3.000000",
			"xpEagleKnight": "3.000000",
			"AbstractCavalry": "0.750000",
			"AbstractCoyoteMan": "0.750000"
		}],
		"StaggerHandAttack": ["4.000000", "1.500000", {
			"AbstractHeavyInfantry": "3.000000",
			"AbstractLightCavalry": "3.000000",
			"xpEagleKnight": "3.000000",
			"AbstractCavalry": "0.750000",
			"AbstractCoyoteMan": "0.750000"
		}],
		"BuildingAttack": ["9.000000", "3.000000"],
		"unittype": ["远程步兵", "枪炮步兵", "步兵"]
	},
	"deNizam": {
		"displayname": "新军燧枪兵",
		"shortrollovertext": "重装步兵",
		"rollovertext": "训练有素的远程步兵，擅长利用不同阵型的优势。",
		"portraiticon": "resources\\art\\units\\infantry_ranged\\nizam\\nizam_portrait.png",
		"populationcount": "1",
		"trainpoints": "34.0000",
		"initialhitpoints": "210.0000",
		"maxvelocity": "4.2500",
		"resourceDict": [
			["Food", "90.0000"],
			["Gold", "25.0000"]
		],
		"armorDict": [
			["Siege", "0.2000"]
		],
		"StaggerRangedAttack": ["20.000000", "3.000000", "12.000000", {
			"AbstractArtillery": "2.000000",
			"AbstractSiegeTrooper": "2.000000"
		}],
		"StaggerHandAttack": ["15.000000", "1.500000", {
			"AbstractCavalry": "2.000000",
			"AbstractLightInfantry": "1.500000"
		}],
		"BuildingAttack": ["25.000000", "3.000000"],
		"unittype": ["重装步兵", "步兵", "枪炮步兵", "远程步兵"]
	}
}