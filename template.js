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
			var template = Handlebars.compile( $('#template').html() );
			$('article.test').append (template(parsed));
			// Assuming json data is wrapped in square brackets as Drew suggests
			//console.log(jsonresponse[0].name);
	});






/*pulling from an array like below works just fine. i need to put FatJSON.json into an array*/
/*	var data = [
		{
			author: "Taylor Jensen",
			tweet: "How the hell does this work?!"
		},
		{
			author: "Aaron Brackett",
			tweet: "FatJSON COMING RIGHT UP"
		}
	];*/
	/*the next lines compile the "template"*/
	/*var template = Handlebars.compile( $('#template').html() );
	$('article.test').append (template(data));*/
})();