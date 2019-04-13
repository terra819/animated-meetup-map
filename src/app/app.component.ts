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
    html: '<div class="elementToFadeInAndOut"><img src="https://cdn.jsdelivr.net/gh/terra819/animated-meetup-map@master/src/assets/redcircle.png" height="50" width="50"></div>',
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
  playing = false;
  interval: any;
  playerDate = new Date('4/3/2019');

  constructor() { }

  play() {
    this.playing = true;
    const _this = this;
    this.interval = setInterval(function () { _this.plot(); }, 500);
  }

  stop() {
    this.playing = false;
    clearInterval(this.interval);
    this.playerDate = new Date('4/3/2019');
  }

  plot() {
    // this.layers = [];
    for (let meetup of this.meetups) {
      const date1 = new Date(meetup.date);
      if (date1.getTime() === this.playerDate.getTime()) {
        this.layers.push(marker([meetup.lat, meetup.lon], { icon: this.redCircleIcon }));
      }
    }
    this.playerDate = new Date(
      this.playerDate.getFullYear(),
      this.playerDate.getMonth(),
      this.playerDate.getDate() + 1);
  }
}
