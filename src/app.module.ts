import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { NormalClassModule } from './normal_class/normal_class.module';
import { OcasionalClassModule } from './ocasional_class/ocasional_class.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,

      username: 'postgres',
      password: '1234',
      database: 'prueba',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    UsersModule,
    NormalClassModule,
    OcasionalClassModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
