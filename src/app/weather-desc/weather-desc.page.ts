import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-weather-desc',
  templateUrl: './weather-desc.page.html',
  styleUrls: ['./weather-desc.page.scss'],
})
export class WeatherDescPage implements OnInit {

  private sub: any;
  weatherDesc: object;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.queryParams.subscribe(params => {
      this.weatherDesc = JSON.parse(params['json']); // (+) converts string 'id' to a number
      console.log("sdf");
      console.log(this.weatherDesc);

      // In a real app: dispatch action to load the details here.
   });
  }

}
