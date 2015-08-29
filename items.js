var ChampionModel = require("./champion-model.js")
var versionNumber = ChampionModel.version(function(error, versions){
	if (error){
		console.log("Error getting version\n")
		console.log("Error: " + error)
		return
	}
	return versions[0]
})

function getFatJSON(champs, champItems){
	var challengers = ChampionModel.challengers(function(error, challengers, champs, champItems){
		if (error){
			console.log("Failed to get challengers\n")
			console.log("Error: " + error)
			return
		}
		console.log("Challgers response object: " + challengers)
		console.log("Challenger entries: " + challengers.entries)
		console.log("Challenger outside of loop: " + challengers.entries[0].playerOrTeamId)
		for (var i = 0; i < challengers.entries.length; i++){
			var challenger = challengers.entries[i]
			console.log ("Challenger: " + challenger.id)
			setTimeout(function(challenger, champs, champItems){
				ChampionModel.matchHistory(function(error, history, champs, champItems){
					if (error){
						console.log("Failed to get free champs\n")
						console.log("Error: " + error)
						return
					}
					var matches = history.matches
					for (match in matches){
						players = match.participants
						for (player in players){
							for (champ in champs){
								if (player.championId == champ.id){
									var newChampItem = {
										champion_name: champ.name,
										champion_image: "http://ddragon.leagueoflegends.com/cdn/" + versionNumber + "/img/champion/" + champ.name + ".png",//could be champ.key
										champion_description: champ.title,
										item1: "",
										item1_description: "",
										item1_image: "",
										item2: "",
										item2_description: "",
										item2_image: "",
										item3: "",
										item3_description: "",
										item3_image: "",
										item4: "",
										item4_description: "",
										item4_image: "",
										item5: "",
										item5_description: "",
										item5_image: "",
										item6: "",
										item6_description: "",
										item6_image: ""
									}
									if (player.stats.item0){
										var item1 = ChampionModel.getItem(function(error, item){
											if (error){
												console.log("Failed to get item\n")
												console.log("Error: " + error)
												return
											}
											return item
										}, player.stats.item0)
										newChampItem.item1 = item1.name
										newChampItem.item1_description = item1.description
										newChampItem.item1_image = "http://ddragon.leagueoflegends.com/cdn/" + versionNumber + "img/item/" + item1.id + ".png"
									}
									if (player.stats.item1){
										var item2 = ChampionModel.getItem(function(error, item){
											if (error){
												console.log("Failed to get item\n")
												console.log("Error: " + error)
												return
											}
											return item
										}, player.stats.item1)
										newChampItem.item2 = item2.name
										newChampItem.item2_description = item2.description
										newChampItem.item2_image = "http://ddragon.leagueoflegends.com/cdn/" + versionNumber + "img/item/" + item2.id + ".png"
									}
									if (player.stats.item2){
										var item3 = ChampionModel.getItem(function(error, item){
											if (error){
												console.log("Failed to get item\n")
												console.log("Error: " + error)
												return
											}
											return item
										}, player.stats.item3)
										newChampItem.item3 = item3.name
										newChampItem.item3_description = item3.description
										newChampItem.item3_image = "http://ddragon.leagueoflegends.com/cdn/" + versionNumber + "img/item/" + item3.id + ".png"
									}
									if (player.stats.item4){
										var item4 = ChampionModel.getItem(function(error, item){
											if (error){
												console.log("Failed to get item\n")
												console.log("Error: " + error)
												return
											}
											return item
										}, player.stats.item4)
										newChampItem.item4 = item4.name
										newChampItem.item4_description = item4.description
										newChampItem.item4_image = "http://ddragon.leagueoflegends.com/cdn/" + versionNumber + "img/item/" + item4.id + ".png"
									}
									if (player.stats.item5){
										var item5 = ChampionModel.getItem(function(error, item){
											if (error){
												console.log("Failed to get item\n")
												console.log("Error: " + error)
												return
											}
											return item
										}, player.stats.item5)
										newChampItem.item5 = item5.name
										newChampItem.item5_description = item5.description
										newChampItem.item5_image = "http://ddragon.leagueoflegends.com/cdn/" + versionNumber + "img/item/" + item5.id + ".png"
									}
									if (player.stats.item6){
										var item6 = ChampionModel.getItem(function(error, item){
											if (error){
												console.log("Failed to get item\n")
												console.log("Error: " + error)
												return
											}
											return item
										}, player.stats.item6)
										newChampItem.item6 = item6.name
										newChampItem.item6_description = item6.description
										newChampItem.item6_image = "http://ddragon.leagueoflegends.com/cdn/" + versionNumber + "img/item/" + item6.id + ".png"
									}
									champItems += newChampItem
								}
							}
						}
					}
				}, challenger.playerOrTeamId)
			},10000)
		}
	},champs, champItems)
	return champItems
}

var freeChamps = ChampionModel.freeChamps(function(error, champs){
	var completeChamps =[]
	if (error){
		console.log("Failed to get free champs\n")
		console.log("Error: " + error)
		return
	}
	console.log("Free Champs: " + champs.champions)
	console.log("Champ id from indexing in: " + champs.champions[0].id)
	console.log("Another property: " + champs.champions[0].botEnabled)
	var allFreeChamps = champs.champions
	for (var i = 0; i < allFreeChamps.length; i++){
		var champID = allFreeChamps[i].id
		console.log("Champ ID: " + champID)
		var newChamp = ChampionModel.getChamp(function(error, champion){
			if (error){
				console.log("Failed at getting a specific champion\n")
				console.log("Error: " + error)
				return
			}
			return champion
		}, champID)
		completeChamps += newChamp
	}
	return completeChamps
})
var champItems = []
var FatJSON = getFatJSON(freeChamps, champItems)
ChampionModel.postFatJSON(FatJSON, function(){
	return
})
