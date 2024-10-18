import { Offer, Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/modules/prisma/prisma.service';

@Injectable()
export class OfferRepository {
  constructor(private prisma: PrismaService) {}

  async getOffers(): Promise<Offer[]> {
    return this.prisma.offer.findMany();
  }

  async getOffer(data: Prisma.OfferWhereUniqueInput): Promise<Offer> {
    return this.prisma.offer.findUnique({
      where: data,
    });
  }
}
