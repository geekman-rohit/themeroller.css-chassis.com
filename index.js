var express = require( "express" ),
	app, server, config;
config = {
	port: 3000
};
app = express();
app.use ( "/", express.static( "./static" ) );
server = app.listen( config.port, function() {
    console.log( "Listening on " + config.port + "..." );
} );
