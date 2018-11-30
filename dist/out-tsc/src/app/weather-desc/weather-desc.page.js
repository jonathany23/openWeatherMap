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
var router_1 = require("@angular/router");
var WeatherDescPage = /** @class */ (function () {
    function WeatherDescPage(route) {
        this.route = route;
    }
    WeatherDescPage.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.queryParams.subscribe(function (params) {
            _this.weatherDesc = JSON.parse(params['json']); // (+) converts string 'id' to a number
            console.log("sdf");
            console.log(_this.weatherDesc);
            // In a real app: dispatch action to load the details here.
        });
    };
    WeatherDescPage = __decorate([
        core_1.Component({
            selector: 'app-weather-desc',
            templateUrl: './weather-desc.page.html',
            styleUrls: ['./weather-desc.page.scss'],
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], WeatherDescPage);
    return WeatherDescPage;
}());
exports.WeatherDescPage = WeatherDescPage;
//# sourceMappingURL=weather-desc.page.js.map