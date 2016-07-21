```
C:\tmp\myapp>ng build
(node:11024) fs: re-evaluating native module sources is not supported. If you are using the graceful-fs module, please update it to a more recent version.

Running without elevated rights. Running Ember CLI "as Administrator" increases performance significantly.
See ember-cli.com/user-guide/#windows for details.

Build failed.
The Broccoli Plugin: [BroccoliTypeScriptCompiler] failed with:
Error: Typescript found the following errors:
  C:/tmp/myapp/tmp/broccoli_type_script_compiler-input_base_path-K0N6H6sP.tmp/0/src/app/contracts/contract-list/contract-list.component.spec.ts (17, 21): Supplied parameters do not match any signature of call target.
    at BroccoliTypeScriptCompiler._doIncrementalBuild (C:\tmp\myapp\node_modules\angular-cli\lib\broccoli\broccoli-typescript.js:120:19)
    at BroccoliTypeScriptCompiler.build (C:\tmp\myapp\node_modules\angular-cli\lib\broccoli\broccoli-typescript.js:43:10)
    at C:\tmp\myapp\node_modules\angular-cli\node_modules\broccoli-caching-writer\index.js:152:21
    at lib$rsvp$$internal$$tryCatch (C:\tmp\myapp\node_modules\angular-cli\node_modules\broccoli-caching-writer\node_modules\rsvp\dist\rsvp.js:1036:16)
    at lib$rsvp$$internal$$invokeCallback (C:\tmp\myapp\node_modules\angular-cli\node_modules\broccoli-caching-writer\node_modules\rsvp\dist\rsvp.js:1048:17)
    at lib$rsvp$$internal$$publish (C:\tmp\myapp\node_modules\angular-cli\node_modules\broccoli-caching-writer\node_modules\rsvp\dist\rsvp.js:1019:11)
    at lib$rsvp$asap$$flush (C:\tmp\myapp\node_modules\angular-cli\node_modules\broccoli-caching-writer\node_modules\rsvp\dist\rsvp.js:1198:9)
    at _combinedTickCallback (internal/process/next_tick.js:67:7)
    at process._tickCallback (internal/process/next_tick.js:98:9)

The broccoli plugin was instantiated at:
    at BroccoliTypeScriptCompiler.Plugin (C:\tmp\myapp\node_modules\angular-cli\node_modules\broccoli-caching-writer\node_modules\broccoli-plugin\index.js:10:31)
    at BroccoliTypeScriptCompiler.CachingWriter [as constructor] (C:\tmp\myapp\node_modules\angular-cli\node_modules\broccoli-caching-writer\index.js:21:10)
    at BroccoliTypeScriptCompiler (C:\tmp\myapp\node_modules\angular-cli\lib\broccoli\broccoli-typescript.js:27:5)
    at Angular2App._getTsTree (C:\tmp\myapp\node_modules\angular-cli\lib\broccoli\angular2-app.js:321:18)
    at Angular2App._buildTree (C:\tmp\myapp\node_modules\angular-cli\lib\broccoli\angular2-app.js:116:23)
    at new Angular2App (C:\tmp\myapp\node_modules\angular-cli\lib\broccoli\angular2-app.js:53:23)
    at module.exports (C:\tmp\myapp\angular-cli-build.js:10:10)
    at Class.module.exports.Task.extend.setupBroccoliBuilder (C:\tmp\myapp\node_modules\angular-cli\node_modules\angular-cli\lib\models\builder.js:55:19)
    at Class.module.exports.Task.extend.init (C:\tmp\myapp\node_modules\angular-cli\node_modules\angular-cli\lib\models\builder.js:89:10)
    at new Class (C:\tmp\myapp\node_modules\angular-cli\node_modules\angular-cli\node_modules\core-object\core-object.js:18:12)
    at Class.module.exports.Task.extend.run (C:\tmp\myapp\node_modules\angular-cli\node_modules\angular-cli\lib\tasks\build.js:15:19)
    at C:\tmp\myapp\node_modules\angular-cli\node_modules\angular-cli\lib\commands\build.js:32:24
    at lib$rsvp$$internal$$tryCatch (C:\tmp\myapp\node_modules\angular-cli\node_modules\angular-cli\node_modules\rsvp\dist\rsvp.js:1036:16)
    at lib$rsvp$$internal$$invokeCallback (C:\tmp\myapp\node_modules\angular-cli\node_modules\angular-cli\node_modules\rsvp\dist\rsvp.js:1048:17)
    at lib$rsvp$$internal$$publish (C:\tmp\myapp\node_modules\angular-cli\node_modules\angular-cli\node_modules\rsvp\dist\rsvp.js:1019:11)
    at lib$rsvp$asap$$flush (C:\tmp\myapp\node_modules\angular-cli\node_modules\angular-cli\node_modules\rsvp\dist\rsvp.js:1198:9)
```