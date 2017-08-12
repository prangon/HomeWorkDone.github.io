(function ($) {
	"use strict";

    jQuery(document).ready(function($){
   
    /* Map 1*/
    var location = [41.399249, -73.117350];
    var infoContent = '<div class="gmap-infowindow">' +
                              '<h5>Address</h5>' + 
                              '<p>470 Lucy Forks, Patriciafurt, YC7B 3UT</p>' +
                              '<br/>'+
                              '<h5>Phone Number</h5>'+
                              '<p>(0161) 347 8854 <span>(0117) 900 9463</span></p>'+
                           '</div>'
    $('#map-1')
      .gmap3({
        center: location,
        zoom:15,
        scrollwheel: false,
        disableDefaultUI: true,
        mapTypeId: "mapCanStyle",
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, "mapCanStyle"]
        }
      })
        
      .infowindow({
        position: location,
        content: infoContent,
        pixelOffset: new google.maps.Size(0, 65)
      })
      .then(function (infowindow) {
        infowindow.open(this.get(0))
      })

      .styledmaptype(
        "mapCanStyle",
        [
          {"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#b6b6b6"}]},
          {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},
          {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
          {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#545454"}]},
          {"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#545454"}]},
          {"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"off"}]},
          {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f2f2f2"}]},
          {"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"},{"visibility":"on"}]},
          {"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"}]},
          {"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"off"}]},
          {"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#e4e4e4"}]},
          {"featureType":"transit","elementType":"geometry","stylers":[{"visibility":"off"}]},
          {"featureType":"water","elementType":"geometry","stylers":[{"color":"#28ae5f"}]},
          {"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#28ae5f"}]},
          {"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},
        ],
        {name: "RRF"}
      );


    });

}(jQuery));	