;(function(doc, undefined ) {
  'use strict';

  var $scriptDefault = doc.querySelector( '[data-js="script-default"]' );
  var BASE_URL = $scriptDefault.getAttribute( 'data-base-url' );

  require.config({
    baseUrl: BASE_URL + '/js',
    shim : {
        "bootstrap" : { "deps" :['jquery'] }
    },
    paths: {
      jquery: 'jquery',
      lodash: 'lodash',
      bootstrap:  'bootstrap'
    }
  });


  require([  'jquery', 'bootstrap', 'lodash' ], function( $, _ ) {
    require(['../../controller/Pessoa/Pessoa']);
    console.log( 'jQuery, lodash, handlebars e bootstrap  carregados!', $( document ) );
  });

})( document );
