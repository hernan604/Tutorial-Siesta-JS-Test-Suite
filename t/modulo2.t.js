Class( "Calculadora", {
  has : {
    resultado: { is : "rw", init: (function() { return 0 }) }
  },
  methods : {
    adicionar: function ( val1,val2 ) {
      this.setResultado( val1 + val2 );
      return this;
    },
    subtrair: function( val1,val2 ) {
      this.setResultado( val1 - val2 );
      return this;
    },
    multiplicar: function ( val1, val2 ) {
      this.setResultado( val1 * val2 );
      return this;
    },
    dividir: function( val1, val2 ) {
      this.setResultado( val1 / val2 );
      return this;
    },
    zerar: function( ) {
      this.setResultado( 0 );
      return this;
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

  t.is( calc.adicionar( calc.resultado, 10 ).resultado, 13, "Resultado anterior +10 = 13" )

  t.diag( "Multiplicação" )
  t.is( calc.multiplicar( calc.resultado, 50 ).resultado, 650, "Resultado anterior * 13 = 650" )

  t.diag( "Divisao" )
  t.is( calc.dividir( calc.resultado , 650 ).resultado, 1, "Resultado anterior / 650 = 1" )

  calc.zerar();
  t.is( calc.resultado, 0 , "Resultado zerado na calculadora" );

})
