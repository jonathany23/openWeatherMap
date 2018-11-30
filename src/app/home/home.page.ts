import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { OpenNativeSettings } from '@ionic-native/open-native-settings/ngx';

import { OpenWeatherMapService } from '../../services/open-weather-map.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lat: number;
  long: number;
  weatherData: any[] = []; 

  constructor(public navCtrl: NavController, protected openWeatherMapService: OpenWeatherMapService, private router: Router, private geolocation: Geolocation, public openNativeSettings: OpenNativeSettings){
    
  }

  ionViewWillEnter(){

    //this.openNativeSettings.open('location').then

    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;

      console.log(this.lat);
      console.log(this.long);

      //Llama al API del Clima
      this.openWeatherMapService.getWeatherByGeolocation(this.lat, this.long)
      .subscribe(
        (data) => {
          this.weatherData = data['list'];
          console.log(this.weatherData);
        },
        (error) => {
          console.log(error);
        } 
      )
    }).catch((error) => {
      console.log('Error getting location', error);
    })
  }

  public nextPage(weather){
    console.log(weather);
    //this.navCtrl.navigateForward('/weatherDesc', { queryParams: { data: weather }});
    //this.router.navigate(['/weatherDesc'], { queryParams: { data: weather }});
    let navigationExtras: NavigationExtras = {
      queryParams: { json : JSON.stringify(weather)}
    };
    this.router.navigate(['/weatherDesc'], navigationExtras);
  }
  

}
