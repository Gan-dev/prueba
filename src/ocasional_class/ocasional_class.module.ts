import { Module } from '@nestjs/common';
import { OcasionalClassService } from './ocasional_class.service';
import { OcasionalClassController } from './ocasional_class.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OcasionalClass } from './ocasional_class.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([OcasionalClass])
  ],
  providers: [OcasionalClassService],
  controllers: [OcasionalClassController]
})
export class OcasionalClassModule { }
