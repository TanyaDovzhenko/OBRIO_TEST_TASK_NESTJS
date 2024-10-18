import { Purchase } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user/user.repository';
import { OfferRepository } from '../offer/offer.repository';
import { AnalyticsService } from '../analytics/analytics.service';
import { PurchaseRepository } from './purchase.repository';
import { CreatePurchaseDto } from './types/dto/create-purchase.dto';
import { ExistingException } from 'src/common/exeptions/custom-exceptions';
import { ReportService } from '../report/report.service';

@Injectable()
export class PurchaseService {
  constructor(
    private purchaseRepository: PurchaseRepository,
    private userRepository: UserRepository,
    private offerRepository: OfferRepository,
    private analyticsService: AnalyticsService,
    private reportService: ReportService,
  ) {}

  async createPurchase(dto: CreatePurchaseDto): Promise<Purchase> {
    const user = await this.userRepository.getUser({ id: dto.userId });
    if (!user) throw new ExistingException('User', false);

    const offer = await this.offerRepository.getOffer({ id: dto.offerId });
    if (!offer) throw new ExistingException('Offer', false);

    const purchase = await this.purchaseRepository.createPurchase(dto);

    await this.analyticsService.sendAnalyticsData(user.email);
    await this.reportService.planReport(user.email, user.name);

    return purchase;
  }
}
