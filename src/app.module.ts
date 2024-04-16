import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './client/auth/auth.module';
import { UsersModule } from './client/users/users.module';
import { WeatherModule } from './client/weather/weather.module';
import { CitiesModule } from './client/cities/cities.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('MONGO_URI') || 'mongodb+srv://bigdan:r7iVlLKjXblTjY2a@cluster0.wvrwpyl.mongodb.net/weather_db?retryWrites=true&w=majority&appName=Cluster0',
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UsersModule,
    WeatherModule,
    CitiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
