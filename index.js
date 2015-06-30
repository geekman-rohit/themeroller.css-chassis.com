var express = require( "express" ),
	app, server, config, port;
port = process.env.npm_package_config_port;
app = express();
app.use ( "/", express.static( "./static" ) );
server = app.listen( port, function() {
	console.log( "Listening on " + port + "..." );
} );
