import { Controller, Post, Body, Get, Param, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { CreateClassDto } from './dto/create-class.dto';
import { NormalClassService } from './normal_class.service';
import { UpdateClassDto } from './dto/update-class.dto';

@Controller('normalClass')
export class NormalClassController {

    constructor(
        private classService: NormalClassService
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
