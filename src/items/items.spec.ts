import { Test } from '@nestjs/testing';
import { ItemsService } from './items.service';
import { PrismaService } from '../prisma/prisma.service';

const mockPrismaService = {
  items: {
    findMany: jest.fn(),
  },
};

describe('itemsのテスト', () => {
  let itemsService;
  let prismaService;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ItemsService,
        {
          provide: 'PrismaService',
          useValue: mockPrismaService,
        },
      ],
    }).compile();
    itemsService = module.get<ItemsService>(ItemsService);
    prismaService = module.get<PrismaService>('PrismaService');
  });

  describe('findAll', () => {
    it('正常系', async () => {
      prismaService.item.findMany.mockResolvedValue([]);
      const expected = [];
      const result = await itemsService.findAll();
      expect(result).toEqual(expected);
    });
  });
});
