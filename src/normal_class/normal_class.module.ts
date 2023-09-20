import { Module } from '@nestjs/common';
import { NormalClassController } from './normal_class.controller';
import { NormalClassService } from './normal_class.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NormalClass } from './normal_class.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([NormalClass]), UsersModule],
  controllers: [NormalClassController],
  providers: [NormalClassService],
})
export class NormalClassModule { }
