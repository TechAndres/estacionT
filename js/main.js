function station(){
       $.get( "http://estaciont-backend.herokuapp.com/api/v1/stations", function(data) {
          console.log('sucess',data);
          first_station= data[1];
          $("#current_station").html(first_station.name);
          $("#station_img").attr("src",first_station.image_url);

          // $("#station_img").css('transform','rotate('+90+'deg)');
          console.log(first_station.id);
          // $(v).each(function(index){
          //   console.log( index );
          // })
         // $.get("#body-alarm").html(v[0]);
        });
}

function alerts(){
       $.get( "http://estaciont-backend.herokuapp.com/api/v1/stations/1/alerts", function(data) {
          console.log('sucess',data);
          last_alarm= data[data.length-1];
          $("#body-title").html("ID: "+ last_alarm.id);
          $("#alarms-description").html(last_alarm.description);
          $("#id-alert").html("ID: "+ last_alarm.id);
          $("#description-alert").html( last_alarm.description);
          // $("#station_img").css('transform','rotate('+90+'deg)');
          console.log(last_alarm);
          // $(v).each(function(index){
          //   console.log( index );
          // })
         // $.get("#body-alarm").html(v[0]);
        });
}

$(document).ready(function() {
    station();
    alerts();

})
