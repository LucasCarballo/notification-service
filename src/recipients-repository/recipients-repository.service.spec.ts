import { Test, TestingModule } from '@nestjs/testing';
import { RecipientsRepositoryService } from './recipients-repository.service';

describe('RecipientsRepositoryService', () => {
  let service: RecipientsRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecipientsRepositoryService],
    }).compile();

    service = module.get<RecipientsRepositoryService>(RecipientsRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
