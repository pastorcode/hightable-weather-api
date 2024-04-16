import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBasicAuth, ApiTags } from '@nestjs/swagger';
import { BasicGuard } from '../auth/passport/basic.guard';
import { GetUser } from '../../utils/decorators';
import { User } from './schemas/user.schema';

@ApiTags('Authenticated User')
@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('')
  @ApiBasicAuth()
  @UseGuards(BasicGuard)
  findOne(@GetUser() user: User) {
    const email = user.email;
    return this.usersService.findOneByEmail(email);
  }
}
