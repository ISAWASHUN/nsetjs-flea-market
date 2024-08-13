import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from '@prisma/client';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return await this.itemsService.create(createItemDto);
  }

  @Get(':id')
  findById(@Param('id', ParseUUIDPipe) id: string): Item {
    const found = this.itemsService.findById(id);
    if (!found) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
    return this.itemsService.findById(id);
  }

  @Put(':id')
  updateStatus(@Param('id', ParseUUIDPipe) id: string): Item {
    return this.itemsService.updateStatus(id);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string): Item {
    return this.itemsService.delete(id);
  }
}
