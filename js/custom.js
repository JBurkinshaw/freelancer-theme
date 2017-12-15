/*
 * Custon javascript for this site.
 */

 // Create a map object in the map div
 var map = L.map('map-leaflet', {
   scrollWheelZoom: false
 }).setView([49.70, -123.15], 9);

// Add a layer to the map
 L.tileLayer('http://b.sm.mapstack.stamen.com/((toner-background,$fff[difference],$fff[@70],$eb9074[hsl-color]),toner-labels[@80])/{z}/{x}/{y}.png', {
 attribution: 'Tiles by <a href="http://mapstack.stamen.com/" >Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0/" >CC-BY 3.0</a>. Data &copy; <a href="http://openstreetmap.org" >OpenStreetMap</a> contributors, under <a href="http://creativecommons.org/licenses/by-sa/2.0/" >CC-BY-SA</a>',
 maxZoom: 18,
 }).addTo(map);

// Add a marker to the map
//var marker = L.marker([48.4396, -123.3657]).addTo(map);
