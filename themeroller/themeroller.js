var fs = require( "fs" );
var path = require( "path" );
var themeroller = {
	json: {},
	useJSON: function( data ) {
		this.json = data;
	},

	useJSONFolder: function( folder ) {
		var list = fs.readdirSync( folder );
		for ( key in list ) {
			filename = path.join( folder, list[ key ] );

			if ( path.extname( filename ) == ".json" ) {
				var json = JSON.parse( fs.readFileSync( filename ) );
				this.json[ path.basename( filename, ".json" ) ] = json;
			}

		}
	},
	render: function() {

	}

}

module.exports = themeroller;
