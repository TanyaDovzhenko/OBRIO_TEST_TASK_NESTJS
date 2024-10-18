import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { UserModule } from './modules/user/user.module';
import { OfferModule } from './modules/offer/offer.module';
import { ReportModule } from './modules/report/report.module';
import { PurchaseModule } from './modules/purchase/purchase.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { PrismaModule } from './common/modules/prisma/prisma.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    PrismaModule,
    UserModule,
    OfferModule,
    PurchaseModule,
    AnalyticsModule,
    ReportModule,
  ],
})
export class AppModule {}
