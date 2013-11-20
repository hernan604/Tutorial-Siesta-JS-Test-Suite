var Harness = Siesta.Harness.Browser.ExtJS;

Harness.configure({
    title             : 'Joose test suite',
    verbosity         : 0,
// cachePreload       : true,
// transparentEx      : true,
    keepResults       : false,
    autoCheckGlobals  : true,
    maxThreads        : 1,
    disableCaching    : true,
//  enableCodeCoverage: true,
    expectedGlobals   : [
        "Joose", 
        "Class", 
        "Role", 
        "Module", 
        "Singleton", 
        "require",
        "joosetop",
        "JooseGearsInitializeGears",
        "joose",
        "JooseModule",
        "JooseRole",
        "Prototype",
        "JoosePrototype",
        "JooseClass",
        "Type",
        "JooseType",
        "joosify",
        "Joosejoosify",
        "rw",
        "Jooserw",
        "ro",
        "Joosero",
        "__global__",
        "TYPE",
        "func",
        "$",
        "jQuery",
    ],
    preload : [
        "./lib/jquery.js",
        "./lib/joose.js",
        "./lib/tests_base.js",
//      ( window.location.href.match( "DESENVOLVIMENTO" ) ) ? "/DEV/lib/tests-base.js"  : "./PROD/lib/tests-base.js"
    ]
})


Harness.start(
    {
      group: "HOME PAGE",
      forceDOMVisible: true,
      items : [
        "./modulo1_so_js.t.js",
        {
         forceDOMVisible: true,
          hostPageUrl   : "../site/modulo1.htm",
          url           : "./modulo1.t.js",
          preload: [
            "./lib/jquery.js",
            "./lib/joose.js",
            "./lib/tests_base.js"
          ]
        }
      ]
    },
    {
      group: "Módulo: Calculadora",
      forceDOMVisible: true,
      autoCheckGlobals  : false,
      items : [
        "./modulo2.t.js",
      ]
    }
)
