# Edit

This issue is caused becauses browsers in `.browserslistrc` file are not supported.  
I fixed the issue with environment configuration (https://github.com/browserslist/browserslist?tab=readme-ov-file#configuring-for-different-environments) :  

```
[production]
> 0.2% and not dead

[development]
last 2 Chrome versions
last 1 Firefox version
last 2 Edge major versions
last 2 Safari major versions
last 2 iOS major versions
last 2 Android major versions
Firefox ESR
```

And in `package.json`, before launching `ng serve`, I set an environment variable :

Before :

```
"scripts": {
   "start": "ng serve",
}
```

After :

```
"scripts": {
   "start": "BROWSERSLIST_ENV=development ng serve",
}
```


# HMR bug reproduction

This is a minimal reproduction project for a HMR bug with Angular in version 19.1, with a `.browserslistrc` file

When compiling, I have these warnings :

```
▲ [WARNING] "import.meta" is not available in the configured target environment ("chrome109.0", "edge131.0", "firefox115.0", "ios11.0", "opera114.0", "safari16.6" + 5 overrides) and will be empty [empty-import-meta]

    src/app/app.component.ts:13:99:
      13 │ ... + encodeURIComponent(t), import.meta.url).href).then(m => m.de...
         ╵                              ~~~~~~~~~~~


▲ [WARNING] "import.meta" is not available in the configured target environment ("chrome109.0", "edge131.0", "firefox115.0", "ios11.0", "opera114.0", "safari16.6" + 5 overrides) and will be empty [empty-import-meta]

    src/app/app.component.ts:13:361:
      13 │ ...efined" || ngDevMode) && (import.meta.hot && import.meta.hot.on...
         ╵                              ~~~~~~~~~~~


▲ [WARNING] "import.meta" is not available in the configured target environment ("chrome109.0", "edge131.0", "firefox115.0", "ios11.0", "opera114.0", "safari16.6" + 5 overrides) and will be empty [empty-import-meta]

    src/app/app.component.ts:13:380:
      13 │ ...e) && (import.meta.hot && import.meta.hot.on("angular:component...
         ╵                              ~~~~~~~~~~~


▲ [WARNING] "import.meta" is not available in the configured target environment ("chrome109.0", "edge131.0", "firefox115.0", "ios11.0", "opera114.0", "safari16.6" + 5 overrides) and will be empty [empty-import-meta]

    src/app/empty/empty.component.ts:11:114:
      11 │ ... + encodeURIComponent(t), import.meta.url).href).then(m => m.de...
         ╵                              ~~~~~~~~~~~


▲ [WARNING] "import.meta" is not available in the configured target environment ("chrome109.0", "edge131.0", "firefox115.0", "ios11.0", "opera114.0", "safari16.6" + 5 overrides) and will be empty [empty-import-meta]

    src/app/empty/empty.component.ts:11:369:
      11 │ ...efined" || ngDevMode) && (import.meta.hot && import.meta.hot.on...
         ╵                              ~~~~~~~~~~~


▲ [WARNING] "import.meta" is not available in the configured target environment ("chrome109.0", "edge131.0", "firefox115.0", "ios11.0", "opera114.0", "safari16.6" + 5 overrides) and will be empty [empty-import-meta]

    src/app/empty/empty.component.ts:11:388:
      11 │ ...e) && (import.meta.hot && import.meta.hot.on("angular:component...
         ╵                              ~~~~~~~~~~~
```

When load the app with Firefox or Chrome, I have this fatal error 

```
Uncaught TypeError: URL constructor: /@ng/component?c=src%2Fapp%2Fempty%2Fempty.component.ts%40C7zEmptyComponent&t=1737229993392 is not a valid URL. main.js:39:27
    C7zEmptyComponent_HmrLoad main.js:39
    <anonymous> empty.component.ts:7
    <anonymous> empty.component.ts:7
    C7zEmptyComponent_HmrLoad main.js:39
    <anonymous> empty.component.ts:7
    <anonymous> empty.component.ts:7
```
