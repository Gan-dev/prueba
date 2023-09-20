import { Test, TestingModule } from '@nestjs/testing';
import { NormalClassController } from './normal_class.controller';

describe('NormalClassController', () => {
  let controller: NormalClassController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NormalClassController],
    }).compile();

    controller = module.get<NormalClassController>(NormalClassController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
