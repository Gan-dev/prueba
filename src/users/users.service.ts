import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';



@Injectable()
export class UsersService {

    constructor(@InjectRepository(Users) private userRepository: Repository<Users>) { }

    async createUser(user: CreateUserDto) {

        const userFound = await this.userRepository.findOne({
            where: {
                username: user.username,
                email: user.email
            }
        })
        if (userFound) {
            return new HttpException("User Already Exist", HttpStatus.CONFLICT)
        }
        const newUser = this.userRepository.create(user)
        this.userRepository.save(newUser)
    }

    async getUsers() {
        return await this.userRepository.find()
    }

    async getUser(id: number) {
        return await this.userRepository.findOne(
            {
                where: {
                    id
                }
            })
    }

    async deleteUser(id: number) {
        return await this.userRepository.delete({ id })
    }

    async updateUser(id: number, user: UpdateUserDto) {
        return await this.userRepository.update({ id }, user)
    }
}
