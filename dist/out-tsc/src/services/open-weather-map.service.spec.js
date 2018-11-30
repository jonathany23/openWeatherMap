"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var open_weather_map_service_1 = require("./open-weather-map.service");
describe('OpenWeatherMapService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(open_weather_map_service_1.OpenWeatherMapService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=open-weather-map.service.spec.js.map