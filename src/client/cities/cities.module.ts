import { Module } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CitiesController } from './cities.controller';
import { GeoNames } from '../../utils/geo-names';
import { MongooseModule } from '@nestjs/mongoose';
import { CitySchema } from './schemas/cities.schema';
import { CitiesRepository } from './cities.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'City', schema: CitySchema }])],
  controllers: [CitiesController],
  providers: [CitiesService, CitiesRepository, GeoNames],
})
export class CitiesModule {}
