import { Component } from '@angular/core';
import { tileLayer, latLng, divIcon, marker, polygon, circle, icon } from 'leaflet';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	redCircleIcon = divIcon({
    html: '<div class="center"><span class="animate zoomIn">Test</span></div>',
		// iconUrl: '../assets/redcircle.png',
		// className: 'center',
		iconSize: [50, 50] // size of the icon 
	});
	options = {
		layers: [
			tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
		],
		zoom: 5,
		center: latLng(46.879966, -121.726909)
	};
	layers = [
		marker([46.879966, -121.726909], { icon: this.redCircleIcon })
	];
}
