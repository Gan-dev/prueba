import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NormalClass } from './normal_class.entity';
import { Repository } from 'typeorm';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';

@Injectable()
export class NormalClassService {

    constructor(
        @InjectRepository(NormalClass) private classRepository: Repository<NormalClass>,
    ) { }

    async createClass(normalClass: CreateClassDto) {

        const newClass = this.classRepository.create(normalClass)

        return await this.classRepository.save(newClass)
    }

    async updateClass(id: number, updateClass: UpdateClassDto) {
        return await this.classRepository.update({ id }, updateClass)
    }

    async getClasses() {
        return await this.classRepository.find({ relations: ["idEstudiante"] })
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