import { Injectable } from '@nestjs/common';
import { Items } from './models/items.model';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  private items: Items[] = [];
  findAll(): Items[] {
    return this.items;
  }

  create(createItemDto: CreateItemDto): Items {
    const item: Items = {
      ...createItemDto,
      status: 'ON_SALE',
    };
    this.items.push(item);
    return item;
  }

  findById(id: string): Items {
    return this.items.find((item) => item.id === id);
  }

  updateStatus(id: string): Items {
    const item = this.findById(id);
    if (item) {
      item.status = item.status === 'ON_SALE' ? 'SOLD_OUT' : 'ON_SALE';
    }
    return item;
  }

  delete(id: string): Items {
    const item = this.findById(id);
    if (item) {
      this.items = this.items.filter((item) => item.id !== id);
    }
    return item;
  }
}
