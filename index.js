function initMap(){
    var options ={
        zoom: 14,
        center: {lat:29.2104,lng:78.9619}
    }
    var map= new google.maps.Map(document.getElementById('map'),options);
   /*
    google.maps.event.addListener(map,'click',
    function(event){
        addMarker({coords:event.latLng})
    });
    var marker= new google.maps.Marker({
        position:{lat:29.2069,lng:78.9709},
        map:map
    });
    var infoWindow= new google.maps.InfoWindow({
        content:'<h3>Drona sagar</h3>'
    });
    marker.addListener('click',function(){
        infoWindow.open(map,marker);
    }); 

    */
 var markers=[ 
       {coords:{lat:29.2069,lng:78.9709},
   content:'<h4>Drona sagar</h4>'
},
{
   coords:{lat:29.2197,lng:78.9702},
   content: '<h4>Girital</h4>'
}     
 ];
for(var i=0;i<markers.length;i++){
   addMarker(markers[i]);
}


function addMarker(props){
   var marker= new google.maps.Marker({
        position:props.coords,
        map:map
    });
    if(props.content){
       var infoWindow= new google.maps.InfoWindow({
        content:props.content
    });
    marker.addListener('click',function(){
        infoWindow.open(map,marker);
    });


    }
}
   }
