To test run:
1. `npm install`
2. `node_modules/.bin/webpack`

It will fail with
```
ERROR in ./main.css
Module build failed (from ./node_modules/extract-loader/lib/extractLoader.js):
ModuleNotFoundError: Module not found: Error: Can't resolve '../node_modules/css-loader/index.js' in 'project-folder/extract-loader-import-fail'
    at project-folder/extract-loader-import-fail/node_modules/webpack/lib/Compilation.js:925:10
    at project-folder/extract-loader-import-fail/node_modules/webpack/lib/NormalModuleFactory.js:401:22
    at project-folder/extract-loader-import-fail/node_modules/webpack/lib/NormalModuleFactory.js:130:21
    at project-folder/extract-loader-import-fail/node_modules/webpack/lib/NormalModuleFactory.js:224:22
```