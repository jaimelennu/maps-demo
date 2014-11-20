/* app.js -- our application code */

"use strict";

// UW coordinates:
// lat: 47.655
// lng: -122.3080

var mapOptions = {
	center:{lat: 47.655, lng: -122.3080},
	zoom: 14 //0=earth to 21 = max zoom

}

//add our map to the page in the 'map' div
var mapElem = document.getElementById('map');

//create the map
var map = new google.maps.Map(mapElem, mapOptions);