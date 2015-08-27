var ChampionModel = require("./champion-model.js")

function getFatJSON(){	
	var arbitraryLimit = 10

	var AllChampsAllItems = ChampionModel.freeChamps(function(error, champList){
		var allChamps = []
		if (error){
			console.log("An error has occurred 1")
			return
		}
		console.log(champList.champions.length + " number of free champions")
		for (champ in champList.champions){
			setTimeout(function(){
			var newChampion = ChampionModel.challengers(function(error, playerList){
				if (error){
					console.log("An error has occurred 2")
					return
				}
				console.log("yadddoopps")
				var champion = {
					"champion_name": champ.name,
					"champion_image": "http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/Ashe.png",
					"champion_description": champ.title,
					"item1": "",
					"item1_description": "",
					"item1_image": "",
					"item2": "",
					"item2_description": "",
					"item2_image": "",
					"item3": "",
					"item3_description": "",
					"item3_image": "",
					"item4": "",
					"item4_description": "",
					"item4_image": "",
					"item5": "",
					"item5_description": "",
					"item5_image": "",
					"item6": "",
					"item6_description": "",
					"item6_image": ""
				}
				console.log("after champ object made")
				for (player in playerList.entries.playerOrTeamId){
					setTimeout(function(){
					var sets = ChampionModel.matchHistory(function(error, matchList){
						console.log("dsafsf")
						var matches = matchList.matches
						for (match in matches){
							if (match.queueType == "RANKED_SOLO_5x5"){
								var participants  = match.participants
								for (participant in participants){
									if (participant.championId == champ.champId){
										var participantItems = [
											participant.stats.item0,
											participant.stats.item1,
											participant.stats.item2,
											participant.stats.item3,
											participant.stats.item4,
											participant.stats.item5,
											participant.stats.item6
										]
										var itemSlot = 1;
										for (itemId in participantItems){
											var newItem = ChampionModel.getItem(function(error, item){
												if (error){
													console.log("An error has occurred 3")
													return
												}
												return item
											}, itemId)
											switch (itemSlot){
												case 1:
													champion.item1 = newItem.name
													champion.item1_description = newItem.description
													champion.item1_image = ""//put datadragon url here
													break
												case 2:
													champion.item2 = newItem.name
													champion.item2_description = newItem.description
													champion.item2_image = ""//put datadragon url here
													break
												case 3:
													champion.item3 = newItem.name
													champion.item3_description = newItem.description
													champion.item3_image = ""//put datadragon url here
													break
												case 4:
													//trinket
													break
												case 5:
													champion.item4 = newItem.name
													champion.item4_description = newItem.description
													champion.item4_image = ""//put datadragon url here
													break
												case 6:
													champion.item5 = newItem.name
													champion.item5_description = newItem.description
													champion.item5_image = ""//put datadragon url here
													break
												case 7:
													champion.item6 = newItem.name
													champion.item6_description = newItem.description
													champion.item6_image = ""//put datadragon url here
													break
											}
										}
										break
									}
								}
							}
						}
					}, player, champ.id)
					//if (champion.itemSets.length > arbitraryLimit) {
						break
					//};
				}, 5000)
				}
				return champion
			});
			allChamps += newChampion
		},5000)
		}
		return allChamps
	});
	ChampionModel.postFatJSON(AllChampsAllItems, function(){
		return
	})
}

getFatJSON()