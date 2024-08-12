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
}
