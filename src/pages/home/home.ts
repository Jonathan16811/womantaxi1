import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
declare var google;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public isWomanRequested: boolean;

  constructor(public navCtrl: NavController) {
  this.isWomanRequested = false;
  const that = this;
  setTimeout(function(){
  that.GoogleMap();
  },2000)
  }

  confirmWomanTaxi(){
  this.isWomanRequested = true;
  }

  cancelWomanTaxi(){
  this.isWomanRequested = false;
  }
  GoogleMap() {
          const map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -23.5128357, lng: -46.8777665},
          zoom: 17
        });
        var infoWindow = new google.maps.InfoWindow;
        // Try HTML5 geolocation.
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };

              infoWindow.setPosition(pos);
              infoWindow.setContent('Sua Localização.');
              infoWindow.open(map);
              map.setCenter(pos);
            }, function() {
              this.handleLocationError(true, infoWindow, map.getCenter());
            });
          } else {
            // Browser doesn't support Geolocation
            this.handleLocationError(false, infoWindow, map.getCenter());
          }


    }
     handleLocationError(browserHasGeolocation, infoWindow, pos) {
     infoWindow.setPosition(pos);
     infoWindow.setContent(browserHasGeolocation ?
                                'Error: The Geolocation service failed.' :
                                'Error: Your browser doesn\'t support geolocation.');

        }

  }
