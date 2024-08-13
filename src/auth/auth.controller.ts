import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '@prisma/client';
import { CreateUserInput } from './dto/createUserInput';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async SignUp(@Body() CreateUserInput: CreateUserInput): Promise<User> {
    return await this.authService.createUser(CreateUserInput);
  }
}
