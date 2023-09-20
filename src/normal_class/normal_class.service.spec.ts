import { Test, TestingModule } from '@nestjs/testing';
import { NormalClassService } from './normal_class.service';

describe('NormalClassService', () => {
  let service: NormalClassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NormalClassService],
    }).compile();

    service = module.get<NormalClassService>(NormalClassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
