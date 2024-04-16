import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CitiesService } from './cities.service';
import { SuccessResponseDto } from '../../utils/dtos/success-reponse.dto';
import { ApiBasicAuth, ApiTags } from '@nestjs/swagger';
import { SuccessMessages } from '../../utils/constants/success-messages.enum';
import { CreateFavouriteDto } from './dto/create-favourite.dto';
import { GetUser } from '../../utils/decorators';
import { BasicGuard } from '../auth/passport/basic.guard';

@ApiTags('Cities')
@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get('/search')
  async getCities(@Query('city') city: string) {
    const response = await this.citiesService.getCities(city);
    return new SuccessResponseDto(SuccessMessages.CITIES_FETCHED, response);
  }

  @Post('/favourite')
  @ApiBasicAuth()
  @UseGuards(BasicGuard)
  async addFavourite(@Body() data: CreateFavouriteDto, @GetUser() user: any) {
    const userId = user._id;
    const response = await this.citiesService.addFavourite(data, userId);
    return new SuccessResponseDto(SuccessMessages.FAVOURITE_ADDED, response);
  }

  @Get('/favourite')
  @ApiBasicAuth()
  @UseGuards(BasicGuard)
  async getFavourite(@GetUser() user: any) {
    const userId = user._id;
    const response = await this.citiesService.getFavourite(userId);
    return new SuccessResponseDto(SuccessMessages.FAVOURITE_FETCHED, response);
  }

  @Delete('/favourite/:id')
  @ApiBasicAuth()
  @UseGuards(BasicGuard)
  async removeFavourite(@Query('id') id: string) {
    const response = await this.citiesService.removeFavourite(id);
    return new SuccessResponseDto(SuccessMessages.FAVOURITE_REMOVED, response);
  }
}
