var ChampionModel = require('../champion-model.js')

function makeFatJSON(){
	var obj = {
		champs : [
			{
				champ: {
	   				"id": 34,
	   				"title": "the Cryophoenix",
	  				"name": "Anivia",
	   				"key": "Anivia"
				}
				itemSets: [
					[
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},//image should go here
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""}
					],
					[
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},//image should go here
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""}
					],
					[
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},//image should go here
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""}
					],
					[
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},//image should go here
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""}
					]
				]
			},
			{
				champ: {
	   				"id": 34,
	   				"title": "the Cryophoenix",
	  				"name": "Anivia",
	   				"key": "Anivia"
				}
				itemSets: [
					[
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},//image should go here
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""}
					],
					[
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},//image should go here
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""}
					],
					[
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},//image should go here
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""}
					],
					[
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},//image should go here
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""}
					]
				]
			},
			{
				champ: {
	   				"id": 34,
	   				"title": "the Cryophoenix",
	  				"name": "Anivia",
	   				"key": "Anivia"
				}
				itemSets: [
					[
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},//image should go here
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""}
					],
					[
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},//image should go here
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""}
					],
					[
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},//image should go here
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""}
					],
					[
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},//image should go here
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""},
						{name: "Last Whisper",
						description: "<stats>+40 Attack Damage<\/stats><br><br><unique>UNIQUE Passive:<\/unique> Physical damage ignores 35% of the target's Armor (applies before Armor Penetration).",
						image: ""}
					]
				]
			}
		]
	}
	var fatJSON = JSON.stringify(obj)
	return fatJSON
}

var newPost = makeFatJSON();
ChampionModel.addFatJSON(newPost, function(){
	console.log("lyeiuafudsjfas")
})