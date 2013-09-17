var Harness = Siesta.Harness.Browser.ExtJS;

Harness.configure({
    title       : 'Siesta Examples',
    keepResults : false
})

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
        "TemplatePadraoCelulaJogo",
        "TemplatePadraoAgrupamento",
        "View",
        "Debugger",
        "SimuladorUtils",
        "Simulador",
        "AjaxObj",
        "FaseReplaceTime",
        "Fase",
        "Jogo",
        "Equipe",
        "Agrupamento",
        "TemplatePadraoGrupoUnico",
        "TemplatePadraoPontosCorridosGrupos",
        "TemplatePadraoMataMata",
        "TemplatePadraoMataMataIdaVolta",
        "TemplatePadraoJogosEntreGrupos",
        "ClassificacaoBase",
        "ClassificacaoGrupoUnico",
        "ClassificacaoJogosEntreGrupos",
        "ClassificacaoPontosCorridosGrupos",
        "ClassificacaoMataMata",
        "ClassificacaoMataMataIdaVolta",
        "view",
        "ultima_classificaca_gerada",
        "ultima_classificaca_gerada_arr",
        "simulador_calls",
        "simular_jogo"
    ],
    preload : [
        "/t/lib/jquery.js",
        "/t/lib/joose.js",
        "/t/lib/tests_base.js",
//      ( window.location.href.match( "DESENVOLVIMENTO" ) ) ? "/DEV/lib/tests-base.js"  : "./PROD/lib/tests-base.js"
    ]
})


Harness.start(
    {
      group: "HOME PAGE",
      forceDOMVisible: true,
      items : [
        "/t/modulo1_so_js.t.js",
        {
         forceDOMVisible: true,
          hostPageUrl   : "/site/modulo1.htm",
          url           : "/t/modulo1.t.js",
          preload: [
            "/t/lib/jquery.js",
            "/t/lib/joose.js",
            "/t/lib/tests_base.js"
          ]
        }
      ]
    },
    {
      group: "Módulo: Calculadora",
      forceDOMVisible: true,
      items : [
        "/t/modulo2.t.js",
      ]
    }
)
