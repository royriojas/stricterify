var transformTools = require( 'browserify-transform-tools' );
var path = require( 'path' );

var options = {
  excludeExtensions: [
    '.json'
  ]
};

module.exports = transformTools.makeStringTransform( 'stricterify', options, function ( content, transformOptions, done ) {
  var file = transformOptions.file;
  var extension = path.extname( file );

  var configData = transformOptions.configData || {};
  var config = configData.config || {};

  if ( config.checkIfSkip ) {
    if ( config.checkIfSkip( file ) ) {
      done( null, content );
    }
  }

  if ( content.indexOf( 'use strict' ) === -1 && (extension === '.js' || extension === '.jsx') ) {
    content = '\n\n"use strict";\n\n' + content;
  }
  done( null, content );
} );
