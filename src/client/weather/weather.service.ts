import { Injectable } from '@nestjs/common';
import { OpenWeather } from '../../utils/open-weather';
import { GetWeatherQueryDto } from './dto/get-weather-query.dto';

@Injectable()
export class WeatherService {
  private readonly openWeather: OpenWeather;
  constructor(openWeather: OpenWeather) {
    this.openWeather = openWeather;
  }
  getWeather(query: GetWeatherQueryDto) {
    const { city, unit } = query;
    return this.openWeather.getWeather(city, unit);
  }
}
