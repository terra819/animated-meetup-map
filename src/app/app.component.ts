import { Component } from '@angular/core';
import { tileLayer, latLng, divIcon, marker, polygon, circle, icon } from 'leaflet';
var json = require('../assets/meetups.json');

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	redCircleIcon = divIcon({
		className: 'center',
		html: '<div class="animate zoomIn"><img src="https://cdn.jsdelivr.net/gh/terra819/animated-meetup-map@master/src/assets/redcircle.png" height="50" width="50"></div>',
	});
	options = {
		layers: [
			tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
		],
		zoom: 5,
		center: latLng(46.879966, -121.726909)
	};
  layers = [];
  meetups = json.meetups;

  constructor() {
    for(let meetup of this.meetups){
      this.layers.push(marker([meetup.lat, meetup.lon], { icon: this.redCircleIcon }));
    }
  }
}
