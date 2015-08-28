/*last modified 8/25/15*/
/*dev notes:
	-this script needs to compile FatJSON into html
*/

(function() {
	var SERVER_URL = "http://52.2.103.61/"

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
			//handlebars for champions
			var champions_template = Handlebars.compile( $('#champions_template').html() );
			$('div#champions_template_container').append (champions_template(parsed));

			//handlebars for items
			var items_template = Handlebars.compile( $('#items_template').html() );
			$('div#items_template_container').append (items_template(parsed));
			// Assuming json data is wrapped in square brackets as Drew suggests
			//console.log(jsonresponse[0].name);
	});
})();