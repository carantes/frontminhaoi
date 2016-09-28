(function($){

    $('.button-collapse').sideNav();

    $('#redirectButton').on( "click", function(e) {
      e.preventDefault();
      $.post( "http://dadhx03.interno:8091/api/migrarprecadastro", { cpf: "07797441790" }, function( data ){       
        //redirecionar
         if (data.redirect) {
           // data.redirect contains the string URL to redirect to
           window.location.href = data.redirect;
       }
      }, "json" )
      
    });  
               

})(jQuery); // end of jQuery name space