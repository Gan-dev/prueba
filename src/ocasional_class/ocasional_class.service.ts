import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OcasionalClass } from './ocasional_class.entity';
import { Repository } from 'typeorm';
import { CreateClassDto } from 'src/normal_class/dto/create-class.dto';
import { UpdateClassDto } from 'src/normal_class/dto/update-class.dto';

@Injectable()
export class OcasionalClassService {

    constructor(
        @InjectRepository(OcasionalClass) private classRepository: Repository<OcasionalClass>
    ) { }

    async createClass(normalClass: CreateClassDto) {

        const newClass = this.classRepository.create(normalClass)

        return await this.classRepository.save(newClass)
    }

    async updateClass(id: number, updateClass: UpdateClassDto) {
        return await this.classRepository.update({ id }, updateClass)
    }

    async getClasses() {
        return await this.classRepository.find()
    }

    async deleteClass(id: number) {
        return await this.classRepository.delete({ id })
    }

    async getClass(id: number) {
        return await this.classRepository.findOne({
            where: {
                id
            }
        })
    }
}
