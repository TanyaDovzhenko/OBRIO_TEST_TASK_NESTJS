import { Offer } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { OfferRepository } from './offer.repository';

@Injectable()
export class OfferService {
  constructor(private offerRepository: OfferRepository) {}

  async getOffers(): Promise<Offer[]> {
    return this.offerRepository.getOffers();
  }
}
