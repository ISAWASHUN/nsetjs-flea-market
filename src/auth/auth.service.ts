import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput } from './dto/createUserInput';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(CreateUserInput: CreateUserInput): Promise<User> {
    const { name, email, password, status } = CreateUserInput;

    return await this.prismaService.user.create({
      data: {
        name,
        email,
        password,
        status,
      },
    });
  }
}
