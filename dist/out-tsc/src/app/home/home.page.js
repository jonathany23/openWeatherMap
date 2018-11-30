"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("@ionic/angular");
var router_1 = require("@angular/router");
var ngx_1 = require("@ionic-native/geolocation/ngx");
var open_weather_map_service_1 = require("../../services/open-weather-map.service");
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, openWeatherMapService, router, geolocation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.openWeatherMapService = openWeatherMapService;
        this.router = router;
        this.geolocation = geolocation;
        this.weatherData = [];
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.lat = resp.coords.latitude;
            console.log(_this.lat);
            _this.long = resp.coords.longitude;
            console.log(_this.long);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.openWeatherMapService.getWeatherByGeolocation(this.lat, this.long)
            .subscribe(function (data) {
            _this.weatherData = data['list'];
            console.log(_this.weatherData);
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.nextPage = function (weather) {
        console.log(weather);
        //this.navCtrl.navigateForward('/weatherDesc', { queryParams: { data: weather }});
        //this.router.navigate(['/weatherDesc'], { queryParams: { data: weather }});
        var navigationExtras = {
            queryParams: { json: JSON.stringify(weather) }
        };
        this.router.navigate(['/weatherDesc'], navigationExtras);
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        __metadata("design:paramtypes", [angular_1.NavController, open_weather_map_service_1.OpenWeatherMapService, router_1.Router, ngx_1.Geolocation])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=home.page.js.map