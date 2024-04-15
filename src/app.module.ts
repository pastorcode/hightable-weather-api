import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './client/auth/auth.module';
import { AuthModule } from './client/auth/auth.module';
import { UsersModule } from './client/users/users.module';
import { AuthModule } from './client/auth/auth.module';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
