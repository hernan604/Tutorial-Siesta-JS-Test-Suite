StartTest(function(t) {

  function hereDoc(f) {
    return f.toString().
        replace(/^[^\/]+\/\*!?/, '').
        replace(/\*\/[^\/]+$/, '');
  }

  var markup = hereDoc(function() {/*!
  <html>
    <head>
  <!--
      <script src="./../jquery.js" type="text/javascript"></script>
  -->
    </head>
    <body>
      <div class="menu-drop">
        <ul class="menu-root">
          <li>
            Menu#1
            <ul class="menu-nivel-1">
              <li>opção #1 #1</li>
              <li>opção #1 #2</li>
              <li>opção #1 #3</li>
            </ul>
          </li>
          <li>
            Menu#2
          </li>
          <li>
            Menu#3
            <ul class="menu-nivel-1">
              <li>opção #3 #1</li>
              <li>opção #3 #2</li>
              <li>opção #3 #3</li>
            </ul>
          </li>
        </ul>
      </div>
    </body>
    <script>
      jQuery( document ).ready( function () {
        jQuery( ".menu-drop > ul > li" )
          .mouseenter( function ( ev ) {
            console.log( ev );
            $( ev.currentTarget ).addClass( "hover" );
          } )
          .mouseleave( function ( ev ) {
            $( ev.currentTarget ).removeClass( "hover" );
          } )
      } );
    </script>
    <style>
      .menu-drop {
           background: none repeat scroll 0% 0% #FFCC00;
           height: 30px;
           width: 100%;
      }

      .menu-drop .menu-root {
          
      }

      .menu-drop > ul {
           list-style: none outside none;
      }

      .menu-drop > ul > li:first-child {
           margin-left: 0px;
      }

      .menu-drop > ul > li > ul {
          position: absolute;
          background: #FF0;
      }

      .menu-drop > ul > li {
           float: left;
           margin-left: 15px;
      }

      .menu-drop > ul > li > ul {
           display: none;
      }

      .menu-drop > ul > li.hover > ul {
           display: block;
           list-style: none;
      }
    </style>
  </html>

  */} );


  jQuery('body').append( markup );

  t.diag( "Simulate hover" );
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
