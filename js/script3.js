window.onload = function () {
	var unitsArr = new Array() 
	for (var unit in units) {
		var displayname = units[unit].displayname
		var portraiticon = units[unit].portraiticon
		unitsArr.push({
			href: "html/"+unit+".html",
			displayname: displayname,
			portraiticon: portraiticon
		})
		//for (var name in units[unit].displayname)
		//console.log(typeof units[unit].displayname)
	}
	console.log(unitsArr)
	var bodyVm = new Vue ({
		el: "#body",
		data: {
			unitsArr: unitsArr
		}
	})
}