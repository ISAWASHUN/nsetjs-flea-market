import { Injectable } from '@nestjs/common';
import { Item, ItemStatus } from '@prisma/client';
import { CreateItemDto } from './dto/create-item.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ItemsService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<Item[]> {
    return await this.prismaService.item.findMany();
  }

  async create(createItemDto: CreateItemDto, userId: string): Promise<Item> {
    const { name, price, description } = createItemDto;
    return await this.prismaService.item.create({
      data: {
        name,
        price,
        description,
        status: ItemStatus.ON_SALE,
        userId: userId,
      },
    });
  }

  async findById(id: string): Promise<Item> {
    return await this.prismaService.item.findUnique({
      where: {
        id,
      },
    });
  }

  async updateStatus(id: string): Promise<Item> {
    return await this.prismaService.item.update({
      where: {
        id,
      },
      data: {
        status: ItemStatus.SOLD_OUT,
      },
    });
  }

  async delete(id: string, userId: string) {
    return await this.prismaService.item.delete({
      where: {
        id,
        userId,
      },
    });
  }
}
