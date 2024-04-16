import { IsDefined, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFavouriteDto {
  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  city: string;
}
