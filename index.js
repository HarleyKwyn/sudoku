var Hapi = require('Hapi');
var config = require('./config.js');

var server = new Hapi.Server(8080, "localhost", config.server);

server.route({
  path: '/static/{path*}',
  method: 'GET',
  handler: {
    directory: {
      path: './static',
      listing: false,
      index: false
    }
  }
});

server.route({
  path: '/',
  method: 'GET',
  handler: function(request,reply){
    //temporary default game object passed in here.
    //later will impliment an array of arrays of a generated game board. 
    reply.view('index', { 'board': config.defaultBoard } );
  }
});

server.start(function() {
  console.log('Hapi server started @ ' + 8080);
});