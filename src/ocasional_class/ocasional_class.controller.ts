import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { OcasionalClassService } from './ocasional_class.service';
import { CreateClassDto } from 'src/normal_class/dto/create-class.dto';
import { UpdateClassDto } from 'src/normal_class/dto/update-class.dto';

@Controller('ocasionalClass')
export class OcasionalClassController {

    constructor(
        private classService: OcasionalClassService
    ) { }

    @Get()
    getClasses() {
        return this.classService.getClasses()
    }

    @Get(':id')
    getClass(@Param('id', ParseIntPipe) id: number) {
        return this.classService.getClass(id)
    }

    @Delete(':id')
    deleteUser(@Param(':id', ParseIntPipe) id: number) {
        return this.classService.deleteClass(id)
    }

    @Post()
    createClass(@Body() newClass: CreateClassDto) {
        return this.classService.createClass(newClass)
    }

    @Patch(':id')
    async updateUser(@Param('id', ParseIntPipe) id: number, @Body() updateClass: UpdateClassDto) {
        return await this.classService.updateClass(id, updateClass)
    }
}


