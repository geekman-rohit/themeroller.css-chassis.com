var express = require( "express" );
var app = express();
var themeroller = require( "./themeroller/themeroller.js" );

//jscs:disable requireCamelCaseOrUpperCaseIdentifiers
var port = process.env.npm_package_config_port;

//jscs:enable requireCamelCaseOrUpperCaseIdentifiers

app.set( "view engine", "ejs" );
themeroller.useJSONFolder( process.cwd() + "/variables" );
console.log( themeroller.json )
app.get( "/", function( req, res ) {
	data = {
		title: "themeroller",
		vars: themeroller.json
	};
	res.render( "index", data )
} );

app.use ( "/", express.static( "./static" ) );
app.use ( "/", express.static( "./bower_components" ) );
app.listen( port, function() {
	console.log( "Listening on http://localhost:" + port );
} );
