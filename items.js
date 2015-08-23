function getFatJSON(){	
	var arbitraryLimit = 10
	var AllChampsAllItems = {
		champs = []
	}

	AllChampsAllItems.champs = ChampionModel.freeChamps(function(error, champList){
		if (error){
			console.log("An error has occurred")
			return
		}
		var champset = []
		for (champ in champList.champions){
			var champion = {
				champ = champ
				itemSets = []
			}
			ChampionModel.challengers(function(error, playerList){
				if (error){
					console.log("An error has occurred")
					return
				}
				for (player in playerList.entries.playerOrTeamId){
					var sets = ChampionModel.matchHistory(function(error, matchList){
						var matches = matchList.matches
						for (match in matches){
							if (match.queueType == "RANKED_SOLO_5x5"){
								var participants  = match.participants
								for (participant in participants){
									if (participant.championId == champ.champId){
										itemSet = []
										var participantItems = [
											participant.stats.item0,
											participant.stats.item1,
											participant.stats.item2,
											participant.stats.item3,
											participant.stats.item4,
											participant.stats.item5,
											participant.stats.item6
										]
										for (itemId in participantItems){
											var newItem = ChampionModel.getItem(function(error, item){
												if (error){
													console.log("An error has occurred")
													return
												}
												return item
											}, itemId)
											itemSet += newItem
										}
										break
									}
								}
							}
						}
					}, player, champ.id)
					if (champion.itemSets.length > arbitraryLimit) {
						break
					};
				}
			});
			champSet += champion
		}
		return champset
	});
}