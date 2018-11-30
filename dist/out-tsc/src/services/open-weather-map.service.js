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
var http_1 = require("@angular/common/http");
var OpenWeatherMapService = /** @class */ (function () {
    function OpenWeatherMapService(http) {
        this.http = http;
    }
    OpenWeatherMapService.prototype.getWeather = function () {
        return this.http.get('http://api.openweathermap.org/data/2.5/find?lat=6.2441988&lon=-75.6512518&cnt=15&lang=es&APPID=519bbbcf519bfe5196989e78e989773e');
    };
    OpenWeatherMapService.prototype.getWeatherByGeolocation = function (latitude, longitude) {
        console.log("services");
        console.log(latitude);
        console.log(longitude);
        return this.http.get('http://api.openweathermap.org/data/2.5/find?lat=' + latitude + '&lon=' + longitude + '&cnt=15&lang=es&APPID=519bbbcf519bfe5196989e78e989773e');
    };
    OpenWeatherMapService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], OpenWeatherMapService);
    return OpenWeatherMapService;
}());
exports.OpenWeatherMapService = OpenWeatherMapService;
//# sourceMappingURL=open-weather-map.service.js.map