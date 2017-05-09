// requires
// node modules
var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var path = require( 'path' );

// our modules
// uses
app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
// routes
// app.use( '/', index );
app.get( '/', function( req, res ){
  res.sendFile( path.resolve( 'public/views/index.html' ) );
});
// globals
var port = process.env.PORT || 3456;
// spin up server
app.listen( port, function() {
  console.log( 'server up on:', port );
});
