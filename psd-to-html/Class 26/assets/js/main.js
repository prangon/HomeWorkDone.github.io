(function ($) {
	"use strict";

    jQuery(document).ready(function($){

var rrfLocation = [23.7581708,90.3867105]
    $('#gomap')
      .gmap3({
        center: rrfLocation,
        zoom:14,
        scrollwheel: false,
        mapTypeId: "mapCanStyle", // to select it directly
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, "mapCanStyle"]
        }
      })
      .marker({
        position: rrfLocation,
        icon: 'http://maps.google.com/mapfiles/marker_green.png',
        animation: google.maps.Animation.BOUNCE
      })
      .infowindow({
        content: "Hello from RRF"
      })
       .then(function (infowindow) {
        var map = this.get(0);
        var marker = this.get(1);
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      })
      .circle({
        center: rrfLocation,
        radius : 500,
        fillColor : "#000000",
        strokeColor : "transparent"

      })
      .styledmaptype(
        "mapCanStyle",
        [
          {"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#dddddd"},{"lightness":0}]},
          {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},
          {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
          {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},
          {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},
          {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},
          {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},
          {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#D01F25"},{"lightness":10}]},
          {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},
          {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},
          {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},
          {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#4B8671"},{"lightness":19}]},
          {"featureType":"water","elementType":"geometry","stylers":[{"color":"#5D92FF"},{"lightness":20}]}
        ],
        {name: "Map Style I"}
      )


      /*
      // Street view
      
      .streetviewpanorama(
        '#panorama',
        {
          position: rrfLocation,
          pov: {
            heading: 200,
            pitch: 0,
            zoom: 0
          }
        }
      )
      */

    });



    jQuery(window).load(function(){

        
    });


}(jQuery));	