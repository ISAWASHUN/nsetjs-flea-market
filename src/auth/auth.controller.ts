import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '@prisma/client';
import { CreateUserInput } from './dto/createUserInput';
import { CredentialsDto } from './dto/credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async SignUp(@Body() CreateUserInput: CreateUserInput): Promise<User> {
    return await this.authService.createUser(CreateUserInput);
  }

  @Post('signin')
  async SignIn(
    @Body() credentialsDto: CredentialsDto,
  ): Promise<{ token: string }> {
    return await this.authService.signIn(credentialsDto);
  }
}
