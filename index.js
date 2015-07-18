var transformTools = require( 'browserify-transform-tools' );

var options = {
  excludeExtensions: [
    '.json'
  ],
  includeExtensions: [
    '.jsx',
    '.js',
    '.es6'
  ]
};

module.exports = transformTools.makeStringTransform( 'stricterify', options, function ( content, transformOptions, done ) {
  if ( content.indexOf( 'use strict' ) === -1 ) {
    content = '\n\n"use strict";\n\n' + content;
  }
  done( null, content );
} );
