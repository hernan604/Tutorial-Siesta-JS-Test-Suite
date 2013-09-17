Class( "Calculadora", {
  has : {
    resultado: { is : "rw", init: (function() { return 0 }) }
  },
  methods : {
    adicionar: function ( val1,val2 ) {
      this.setResultado( val1 + val2 );
    },
    subtrair: function( val1,val2 ) {
      this.setResultado( val1 - val2 );
    },
    multiplicar: function ( val1, val2 ) {
      this.setResultado( val1 * val2 );
    },
    dividir: function( val1, val2 ) {
      this.setResultado( val1 / val2 );
    },
    zerar: function( ) {
      this.setResultado( 0 );
    }
  }
} )
StartTest(function(t) {
  t.diag( "Calculadora" );
  var calc = new Calculadora();

  t.is( calc.resultado, 0 , "Calculadora começou com valor zerado" )

  t.diag( "Soma" )
  calc.adicionar( 1, 2 );
  t.is( calc.resultado, 3, "1 + 2 = 3" );

  calc.adicionar( calc.resultado, 10 );
  t.is( calc.resultado, 13, "Resultado anterior +10 = 13" )

  t.diag( "Multiplicação" )
  calc.multiplicar( calc.resultado, 50 );
  t.is( calc.resultado, 650, "Resultado anterior * 13 = 650" )

  t.diag( "Divisao" )
  calc.dividir( calc.resultado , 650 );
  t.is( calc.resultado, 1, "Resultado anterior / 651 = 1" )

  calc.zerar();
  t.is( calc.resultado, 0 , "Resultado zerado na calculadora" );

})
