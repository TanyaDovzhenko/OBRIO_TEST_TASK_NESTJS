import { User } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './types/dto/create-user.dto';
import { ExistingException } from 'src/common/exeptions/custom-exceptions';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.getUser({ email: dto.email });
    if (user) throw new ExistingException('User', true);
    return this.userRepository.createUser(dto);
  }
}
