/*last modified 8/22/15*/
/*dev notes:
	-this script needs to compile FatJSON into html
*/

(function() {
	function loadJSON(callback) {
		var xobj = new XMLHttpRequest();
		xobj.overrideMimeType("application/json");
		xobj.open('GET', 'FatJSON.json', true);
		xobj.onreadystatechange = function () {
			if (xobj.readyState == 4 && xobj.status == "200") {
			// .open will NOT return a value but simply returns undefined in async mode so use a callback
			callback(xobj.responseText);
			}
		}
		xobj.send(null);

		}
		// Call to function with anonymous callback
		loadJSON(function(response) {
			// Do Something with the response e.g.
			//jsonresponse = JSON.parse(response);
			var parsed = JSON.parse(response);
			var items_template = Handlebars.compile( $('#items_template').html() );
			var champions_template = Handlebars.compile( $('#champions_template').html() );
			$('article').append (items_template(parsed));
			$('div.champion_name').append (champions_template(parsed));
			// Assuming json data is wrapped in square brackets as Drew suggests
			//console.log(jsonresponse[0].name);
	});
})();