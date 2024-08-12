import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Items } from './models/items.model';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  findAll(): Items[] {
    return this.itemsService.findAll();
  }

  @Post()
  create(
    @Body('id') id: string,
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description: string,
  ): Items {
    const item: Items = {
      id,
      name,
      price,
      description,
      status: 'ON_SALE',
    };
    return this.itemsService.create(item);
  }

  @Get(':id')
  findById(@Param('id') id: string): Items {
    return this.itemsService.findById(id);
  }
}
