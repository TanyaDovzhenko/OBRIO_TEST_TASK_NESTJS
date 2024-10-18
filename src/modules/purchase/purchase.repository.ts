import { Injectable } from '@nestjs/common';
import { Purchase } from '@prisma/client';
import { PrismaService } from 'src/common/modules/prisma/prisma.service';
import { CreatePurchaseDto } from './types/dto/create-purchase.dto';

@Injectable()
export class PurchaseRepository {
  constructor(private prisma: PrismaService) {}

  async createPurchase(data: CreatePurchaseDto): Promise<Purchase> {
    return this.prisma.purchase.create({ data });
  }
}
