/* app.js -- our application code */


//install firefox, and firebug

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

//marker positions
//values must be numbers and strings
var position = {
	lat : 47.655,
	lng: -122.3080
}

//create marker on map
var marker = new google.maps.Marker({
	position: position,
	map: map
});

//can use this for filters and things

//remove marker from map
//marker.setMap(null);

//recreate the marker
//marker.setMap(map);


function onGeoPos(position) {
	console.log(position);

}

function onGeoErr(error) {
	//error code
}

if(navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(onGeoPos, onGeoErr, {enableHighAccuracy: true});


} else {
	console.log("geolocation not supported");
}