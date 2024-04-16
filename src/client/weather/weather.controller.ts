import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { ApiTags } from '@nestjs/swagger';
import { SuccessResponseDto } from '../../utils/dtos/success-reponse.dto';
import { SuccessMessages } from '../../utils/constants/success-messages.enum';
import { GetWeatherQueryDto } from './dto/get-weather-query.dto';

@ApiTags('Weather')
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('')
  async getWeatherForecast(@Query() query: GetWeatherQueryDto) {
    const response = await this.weatherService.getWeather(query);
    return new SuccessResponseDto(SuccessMessages.WEATHER_FORECAST, response);
  }
}
