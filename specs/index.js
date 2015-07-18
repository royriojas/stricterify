describe( 'stricterify', function () {
  var transformTools = require( 'browserify-transform-tools' );
  var transform = require( '../' );
  var path = require( 'path' );

  it( 'should append `use strict` to modules that do not have it', function ( done ) {

    var dummyJsFile = path.resolve( __dirname, '../testFixtures/testWithConfig/dummy.js' );

    var content = 'var fn = function () {};\nmodule.exports = fn;';

    transformTools.runTransform( transform, dummyJsFile, {
      content: content
    }, function ( err, transformed ) {
      if ( !err ) {

        expect( transformed ).to.be.equal( '\n\n"use strict";\n\nvar fn = function () {};\nmodule.exports = fn;' );
        done();
      }
      throw err;
    } );
  } );

  it( 'should skip adding it if already have `use strict`', function ( done ) {

    var dummyJsFile = path.resolve( __dirname, '../testFixtures/testWithConfig/dummy.js' );

    var content = '"use strict";\nvar fn = function () {};\nmodule.exports = fn;';

    transformTools.runTransform( transform, dummyJsFile, {
      content: content
    }, function ( err, transformed ) {
      if ( !err ) {

        expect( transformed ).to.be.equal( '"use strict";\nvar fn = function () {};\nmodule.exports = fn;' );
        done();
      }
      throw err;
    } );

  } );

} );
