import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';
import { UsersRepository } from '../users/users.repository';
import { UsersModule } from '../users/users.module';
import { BasicStrategy } from './passport/basic.strategy';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategyService } from "./passport/local.strategy";

@Module({
  imports: [UsersModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, UsersService, UsersRepository, BasicStrategy, LocalStrategyService],
})
export class AuthModule {}
