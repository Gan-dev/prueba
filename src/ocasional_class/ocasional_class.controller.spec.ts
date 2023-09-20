import { Test, TestingModule } from '@nestjs/testing';
import { OcasionalClassController } from './ocasional_class.controller';

describe('OcasionalClassController', () => {
  let controller: OcasionalClassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OcasionalClassController],
    }).compile();

    controller = module.get<OcasionalClassController>(OcasionalClassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
