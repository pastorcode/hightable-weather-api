import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { SuccessMessages } from '../../utils/constants/success-messages.enum';
import { SuccessResponseDto } from '../../utils/dtos/success-reponse.dto';
import {  ApiTags } from '@nestjs/swagger';
import { GetUser } from '../../utils/decorators';
import { User } from '../users/schemas/user.schema';
import { LocalGuard } from './passport/local.guard';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() data: RegisterDto): Promise<SuccessResponseDto> {
    const response = this.authService.create(data);
    return new SuccessResponseDto(SuccessMessages.REGISTERED, response);
  }

  @Post('login')
  @UseGuards(LocalGuard)
  async login(
    @Body() data: LoginDto,
    @GetUser() user: User,
  ): Promise<SuccessResponseDto> {
    const response = user;
    return new SuccessResponseDto(SuccessMessages.LOGGED_IN, response);
  }
}
