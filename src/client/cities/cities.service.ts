import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GeoNames } from '../../utils/geo-names';
import { CreateFavouriteDto } from './dto/create-favourite.dto';
import { City } from './schemas/cities.schema';
import { CitiesRepository } from './cities.repository';

@Injectable()
export class CitiesService {
  private readonly geoNames = new GeoNames();
  private readonly citiesRepository: CitiesRepository;
  constructor(geoNames: GeoNames, citiesRepository: CitiesRepository) {
    this.geoNames = geoNames;
    this.citiesRepository = citiesRepository;
  }
  async getCities(city: string) {
    if (!city) {
      throw new HttpException(
        'City query parameter is required',
        HttpStatus.BAD_REQUEST,
      );
    }
    return await this.geoNames.searchCity(city);
  }

  async addFavourite(data: CreateFavouriteDto, userId: string) {
    try {
      const { city } = data;
      const citySchema = new City();
      citySchema.name = city;
      citySchema.userId = userId;
      return await this.citiesRepository.create(citySchema);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getFavourite(userId: string) {
    try {
      return await this.citiesRepository.getAll(userId);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async removeFavourite(id: string) {
    try {
      return await this.citiesRepository.remove(id);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
