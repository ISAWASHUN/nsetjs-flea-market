import { Injectable } from '@nestjs/common';
import { Item, ItemStatus } from '@prisma/client';
import { CreateItemDto } from './dto/create-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ItemsService {
  constructor(private readonly prismaService: PrismaService) {}
  private items: Item[] = [];
  findAll(): Item[] {
    return this.items;
  }

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const { name, price, description } = createItemDto;
    return await this.prismaService.item.create({
      data: {
        name,
        price,
        description,
        status: ItemStatus.ON_SALE,
      },
    });
  }

  findById(id: string): Item {
    return this.items.find((item) => item.id === id);
  }

  updateStatus(id: string): Item {
    const item = this.findById(id);
    if (item) {
      item.status = item.status === 'ON_SALE' ? 'SOLD_OUT' : 'ON_SALE';
    }
    return item;
  }

  delete(id: string): Item {
    const item = this.findById(id);
    if (item) {
      this.items = this.items.filter((item) => item.id !== id);
    }
    return item;
  }
}
