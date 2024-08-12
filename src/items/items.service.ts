import { Injectable } from '@nestjs/common';
import { Items } from './models/items.model';

@Injectable()
export class ItemsService {
  private items: Items[] = [];
  findAll(): Items[] {
    return this.items;
  }

  create(item: Items): Items {
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
