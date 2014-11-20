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
marker.setMap(null);

//recreate the marker
//marker.setMap(map);



//create new info winder
	var infoWin = new google.maps.InfoWindow();

function onGeoPos(position) {
	console.log("Lat: " + position.coords.latitude);
	console.log("Lng: " + position.coords.longitude);

	var myLocPos = {
		lat: position.coords.latitude,
		lng: position.coords.longitude
	}
	var myLocation = new google.maps.Marker({
		position: myLocPos,
		map: map
	});

	

	//set the content (may contain html tags)
	infoWin.setContent('<p> Hello World! My lat is ' + position.coords.latitude +  'and my lng is '  + position.coords.longitude + '</p>');

	//infoWin.open(map, myLocation);

	//listen for click event on marker
	google.maps.event.addListener(myLocation, 'click', onMarkerClick)

}

function onGeoErr(error) {
	//error code
}

if(navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(onGeoPos, onGeoErr, {enableHighAccuracy: true, maximumAge: 30000});


} else {
	console.log("geolocation not supported");
}

function onMarkerClick() {
	//'this' will refer to the marker object

	//pan the map so that the marker is at the center
	map.panTo(this.getPosition());
	infoWin.open(map, this);
}

$.getJSON('http://data.seattle.gov/resource/65fc-btcc.json')
	.done(function(data){
		//success
		console.log(data);
	})
	.fail(function(error) {
		//error contains error info
	})
	.always(function(){
		//called  either success or error cases
	})