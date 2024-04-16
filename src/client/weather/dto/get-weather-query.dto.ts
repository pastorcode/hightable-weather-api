import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class GetWeatherQueryDto {
  @ApiProperty({
    required: true,
    description: 'City name to get weather forecast',
  })
  @IsNotEmpty()
  city: string;

  @ApiProperty({
    required: false,
    description: 'Unit of measurement for temperature',
    default: 'celcius',
  })
  @IsOptional()
  unit: string;
}
