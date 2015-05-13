
# stricterify - Changelog
## v1.0.3
- **Build Scripts Changes**
  - Release v1.0.3 - [154ecd6]( https://github.com/royriojas/stricterify/commit/154ecd6 ), [royriojas](https://github.com/royriojas), 13/05/2015 02:37:08
    
- **Features**
  - Add an option to skip adding the `use strict` directive to certain files - [f2d153a]( https://github.com/royriojas/stricterify/commit/f2d153a ), [royriojas](https://github.com/royriojas), 13/05/2015 02:36:50
    if you want to prevent certain files from being affected by the transform, you can configure the transform passing a `checkIfSkip` callback.
   
   ```javascript
   var stricterify = require('stricterify').configure({
      checkIfSkip: function (file) {
        return true; // true if you want to skip the transform on the given file or false if you don't.
      }
   });
   
   b.transform(stricterify);
   ```
   
#### changelog
- **Build Scripts Changes**
  - generated changelog - [4cfa69b]( https://github.com/royriojas/stricterify/commit/4cfa69b ), [Roy Riojas](https://github.com/Roy Riojas), 19/03/2015 00:17:59
    
## v1.0.2
- **Build Scripts Changes**
  - Release v1.0.2 - [4d70a20]( https://github.com/royriojas/stricterify/commit/4d70a20 ), [Roy Riojas](https://github.com/Roy Riojas), 19/03/2015 00:17:17
    
#### changelog
- **Build Scripts Changes**
  - Add changelog task and fixed project description - [a9d126c]( https://github.com/royriojas/stricterify/commit/a9d126c ), [Roy Riojas](https://github.com/Roy Riojas), 19/03/2015 00:17:00
    
## v1.0.1
- **Build Scripts Changes**
  - Release v1.0.1 - [2a349be]( https://github.com/royriojas/stricterify/commit/2a349be ), [Roy Riojas](https://github.com/Roy Riojas), 15/03/2015 04:02:09
    
- **Bug Fixes**
  - Fix false positives for async tests - [50eb5f3]( https://github.com/royriojas/stricterify/commit/50eb5f3 ), [Roy Riojas](https://github.com/Roy Riojas), 15/03/2015 04:01:54
    
## v1.0.0
- **Build Scripts Changes**
  - Release v1.0.0 - [c86b717]( https://github.com/royriojas/stricterify/commit/c86b717 ), [Roy Riojas](https://github.com/Roy Riojas), 15/03/2015 03:29:54
    
- **Features**
  - First working version - [80608d9]( https://github.com/royriojas/stricterify/commit/80608d9 ), [Roy Riojas](https://github.com/Roy Riojas), 15/03/2015 03:29:11
    
- **Other changes**
  - Initial commit - [a18b323]( https://github.com/royriojas/stricterify/commit/a18b323 ), [Roy Riojas](https://github.com/Roy Riojas), 14/03/2015 19:59:55
    
