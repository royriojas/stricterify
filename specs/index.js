describe( 'stricterify', function () {
  var transformTools = require( 'browserify-transform-tools' );
  var transform = require( '../' );
  var path = require( 'path' );

  it( 'should append `use strict` to modules that do not have it', function () {

    var dummyJsFile = path.resolve( __dirname, '../testFixtures/testWithConfig/dummy.js' );

    var content = 'var fn = function () {};\nmodule.exports = fn;';

    transformTools.runTransform( transform, dummyJsFile, {
      content: content
    }, function ( err, transformed ) {
      if ( !err ) {
        expect( transformed ).to.equal( '\n\n"use strict";\n\nvar fn = function () {};\nmodule.exports = fn;' );
      }
      throw err;
    }
    );
  } );
  it( 'should skip adding it if already have `use strict`', function () {

    var dummyJsFile = path.resolve( __dirname, '../testFixtures/testWithConfig/dummy.js' );

    var content = '"use strict";\nvar fn = function () {};\nmodule.exports = fn;';

    transformTools.runTransform( transform, dummyJsFile, {
      content: content
    }, function ( err, transformed ) {
      if ( !err ) {
        expect( transformed ).to.equal( '"use strict";\nvar fn = function () {};\nmodule.exports = fn;' );
      }
      throw err;
    }
    );
  } );
} );
