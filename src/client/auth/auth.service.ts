import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { UsersService } from '../users/users.service';
import { ErrorMessages } from '../../utils/constants/error-messages.enum';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private readonly userService: UsersService;

  constructor(userService: UsersService) {
    this.userService = userService;
  }
  async create(data: RegisterDto) {
    const { password } = data;
    try {
      if (data.password !== data.confirmPassword) {
        throw new HttpException(
          ErrorMessages.PASSWORDS_DO_NOT_MATCH,
          HttpStatus.BAD_REQUEST,
        );
      }

      const user = await this.userService.findOneByEmail(data.email);
      if (user) {
        throw new HttpException(
          ErrorMessages.USER_ALREADY_EXISTS,
          HttpStatus.BAD_REQUEST,
        );
      }
      data.password = await bcrypt.hash(password, 10);
      return await this.userService.create(data);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      throw new HttpException(
        ErrorMessages.INVALID_EMAIL_OR_PASSWORD,
        HttpStatus.BAD_REQUEST,
      );
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new HttpException(
        ErrorMessages.INVALID_EMAIL_OR_PASSWORD,
        HttpStatus.BAD_REQUEST,
      );
    }
    return user;
  }

  async validateUserBasic(email: string, password: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      throw new HttpException(
        ErrorMessages.UNAUTHORIZED,
        HttpStatus.BAD_REQUEST,
      );
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new HttpException(
        ErrorMessages.UNAUTHORIZED,
        HttpStatus.BAD_REQUEST,
      );
    }
    return user;
  }
}
