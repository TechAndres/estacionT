function station(){
       url_link = "http://estaciont-backend.herokuapp.com/api/v1/stations";
        var jqxhr = $.get( url_link, function() {
          alert( "success" );
        })
          .done(function() {
            alert( "second success" );
          })
          .fail(function() {
            alert( "error" );
          })
          .always(function() {
            alert( "finished" );
          });
}

$(document).ready(function() {
    station();
})
