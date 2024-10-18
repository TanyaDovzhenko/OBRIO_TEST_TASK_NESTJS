import { Purchase } from '@prisma/client';
import { Body, Controller, Post } from '@nestjs/common';
import { CreatePurchaseDto } from './types/dto/create-purchase.dto';
import { PurchaseService } from './purchase.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('purchase')
export class PurchaseController {
  constructor(private purchaseService: PurchaseService) {}

  @ApiOperation({ summary: 'Create purchase' })
  @Post()
  create(@Body() dto: CreatePurchaseDto): Promise<Purchase> {
    return this.purchaseService.createPurchase(dto);
  }
}
