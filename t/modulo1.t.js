StartTest(function(t) {
  t.diag( "Simulate hover" );
  mostra_alerta();
  t.chain(
    {
      action: "moveCursorTo",
      target: ".menu-root>li:nth-child(1)"
    },
    {
      action: "moveCursorTo",
      target: ".menu-root>li:nth-child(2)"
    },
    function ( next ) {
      // valida com auxilio do jquery
      t.is( !$( ".menu-root>li:nth-child(3) li:nth-child(3)" ).is( ":visible" ), true, "Item do menu NAO está visivel" )
      next();
    },
    {
      moveCursorTo: ".menu-root>li:nth-child(3)"
    },
    function ( next ) {
      // valida com auxilio do jquery
      t.is( $( ".menu-root>li:nth-child(3) li:nth-child(3)" ).is(":visible"), true, "Item do menu está visivel" )
      next();
    }
  // function ( next ) {
  //   t.moveMouseTo( ".menu-root>li:nth-child(1)" );
  //   next();
  // }
  //{
  //  action: "click",
  //  target: ".menu-root>li:nth-child(1)"
  //}
  )

})
