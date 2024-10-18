import { Module } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { PurchaseController } from './purchase.controller';
import { PurchaseRepository } from './purchase.repository';
import { UserRepository } from '../user/user.repository';
import { OfferRepository } from '../offer/offer.repository';
import { AnalyticsService } from '../analytics/analytics.service';
import { ReportService } from '../report/report.service';

@Module({
  controllers: [PurchaseController],
  providers: [
    PurchaseService,
    PurchaseRepository,
    UserRepository,
    OfferRepository,
    AnalyticsService,
    ReportService,
  ],
})
export class PurchaseModule {}
