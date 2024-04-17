import { HttpException, HttpStatus } from '@nestjs/common';
import { UNIT_ENUM } from './constants/enumeration';

export class OpenWeather {
  private readonly apiKey: string;
  private readonly baseUrl: string;

  constructor() {
    this.apiKey = '1bd5b2665ece5d1c2adaec35a0e2042e'; // I won't do this in production
    this.baseUrl = 'https://api.openweathermap.org/data/2.5';
  }

  async getWeather(city: string, units: string) {
    const url = `${this.baseUrl}/forecast?q=${city}&appid=${this.apiKey}&units=${UNIT_ENUM[units]}`;
    const response = await fetch(url);
    const resObj = await response.json();
    if (resObj.cod !== 200) {
      throw new HttpException(resObj.message, HttpStatus.BAD_REQUEST);
    }
    return resObj;
  }
}
