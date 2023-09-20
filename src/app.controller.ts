import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { NormalClass } from './normal_class/normal_class.entity';
import { OcasionalClass } from './ocasional_class/ocasional_class.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly normalClass: NormalClass,
    private readonly OcasionalClass: OcasionalClass
  ) { }

  @Get('clases/todas')
  getHello(): string {
    return this.appService.getHello();

    /* La query se haria seleccionado idEstudiante y juntando las 2 tablas con inner join para obtener
    un sola tabla con las toda la info de las 2 tablas en nestjs no se como hacerlo pero en un dia mas me lo saco
    */
  }
}
