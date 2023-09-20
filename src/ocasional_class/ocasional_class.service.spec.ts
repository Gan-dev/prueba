import { Test, TestingModule } from '@nestjs/testing';
import { OcasionalClassService } from './ocasional_class.service';

describe('OcasionalClassService', () => {
  let service: OcasionalClassService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OcasionalClassService],
    }).compile();

    service = module.get<OcasionalClassService>(OcasionalClassService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
