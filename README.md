[![NPM Version](http://img.shields.io/npm/v/stricterify.svg?style=flat)](https://npmjs.org/package/stricterify)
[![Build Status](http://img.shields.io/travis/royriojas/stricterify.svg?style=flat)](https://travis-ci.org/royriojas/stricterify)

# stricterify
> Browserify transform to add 'use strict' on the modules that don't have it at the first place. Use with care. Better if not global


## Overview
This transform will turn this: 

```javascript
var someFunc = function () {
};
module.exports = someFunc;
```

Into this:

```javascript
'use strict';
var someFunc = function () {
};
module.exports = someFunc;
```

So your code works well once it runs in the browser.

## Install

```bash
npm i --save-dev stricterify
```

## Usage

```
var stricterify = require( 'stricterify' ).configure( {
  checkIfSkip: function (file) {
    // use this callback to decide if you want to skip the
    // file from the transform. This is useful if you're
    // requiring legacy modules that are not prepared to be
    // work in strict mode.
    return !!file.match(/skip\.js/);
  }
} );

var b = browserify();
b.add('./my-module');
b.transform( stricterify );

b.bundle().pipe(process.stdout);
```

## [Changelog](./changelog.md)