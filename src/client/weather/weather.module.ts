import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { OpenWeather } from '../../utils/open-weather';

@Module({
  controllers: [WeatherController],
  providers: [WeatherService, OpenWeather],
})
export class WeatherModule {}
