<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Summoner Spy</title>
</head>
<body>
	<h1>Summoner Spy</h1>
	<?php
		$apiKey = 'b9f2effe-c90e-4633-b36b-5716684ccbac';
		$summonerName = 'fofosfederation';
		// get the basic summoner info
		$result = file_get_contents('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' . $summonerName . '?api_key=' . $apiKey);
		$summoner = json_decode($result)->$summonerName;
		// var_dump($summoner);
	?>	
	<h3>
		<image height="64" width="64" src="http://avatar.leagueoflegends.com/na/<?php print $summonerName; ?>.png" valign="middle"/>
		<?php print $summonerName ?>
	</h3>
	<div>
		Level: <?php print $summoner->summonerLevel; ?>
	</div>
	<?php	
		// get that summoner's wins and losses for each game type
		$result = file_get_contents('https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/' . $summoner->id . '/summary?api_key=' . $apiKey);
		$stats = json_decode($result);
		// var_dump($stats);
		foreach($stats->playerStatSummaries as $statSummary){
			// $statSummary->losses: sometimes losses isn't set
			$losses = property_exists($statSummary, 'losses')? $statSummary->losses : '(not available)';
			print '<p><b>' . $statSummary->playerStatSummaryType . '</b>: ' .
					$statSummary->wins . ' wins, ' . $losses . ' losses</p>';
		}
	?>
</body>
</html>