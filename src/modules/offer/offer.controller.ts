import { Offer } from '@prisma/client';
import { ApiOperation } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';
import { OfferService } from './offer.service';

@Controller('offer')
export class OfferController {
  constructor(private offerService: OfferService) {}

  @ApiOperation({ summary: 'Get offers' })
  @Get()
  getOffers(): Promise<Offer[]> {
    return this.offerService.getOffers();
  }
}
