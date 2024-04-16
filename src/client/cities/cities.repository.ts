import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { City } from './schemas/cities.schema';

@Injectable()
export class CitiesRepository {
  constructor(@InjectModel('City') private readonly cityModel: Model<City>) {}

  async create(city: City): Promise<City> {
    const createdCity = new this.cityModel(city);
    return createdCity.save();
  }

  async getAll(userId: string): Promise<City[]> {
    return this.cityModel.find({ userId }).exec();
  }

  async remove(id: string): Promise<City> {
    return this.cityModel.findByIdAndDelete(id).exec();
  }
}
