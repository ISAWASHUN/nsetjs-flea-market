import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Items } from './models/items.model';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  findAll(): Items[] {
    return this.itemsService.findAll();
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Items {
    return this.itemsService.create(createItemDto);
  }

  @Get(':id')
  findById(@Param('id') id: string): Items {
    return this.itemsService.findById(id);
  }

  @Put(':id')
  updateStatus(@Param('id') id: string): Items {
    return this.itemsService.updateStatus(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Items {
    return this.itemsService.delete(id);
  }
}
