import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/common/modules/prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async createUser(
    data: Omit<Prisma.UserCreateInput, 'purchases'>,
  ): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async getUser(data: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.findUnique({
      where: data,
    });
  }
}
