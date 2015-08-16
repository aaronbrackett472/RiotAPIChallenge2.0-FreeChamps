var arbitraryLimit = 10

var items = ChampionModel.freeChamps(function(error, champList){
	if (error){
		console.log("An error has occurred")
		return
	}
	for (champ in champList.champions){
		champ.possibleItems = []
		var challengers = ChampionModel.challengers(function(error, playerList){
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
									var items = {
										item0 = participant.stats.item0,
										item1 = participant.stats.item1,
										item2 = participant.stats.item2,
										item3 = participant.stats.item3,
										item4 = participant.stats.item4,
										item5 = participant.stats.item5,
										item6 = participant.stats.item6
									}
									champ.possibleItems += items
									break
								}
							}
						}
					}
					if (champ.possibleItems.length > arbitraryLimit) {
						break
					};
				}, player, champ.id)
			}
		});
	}
});