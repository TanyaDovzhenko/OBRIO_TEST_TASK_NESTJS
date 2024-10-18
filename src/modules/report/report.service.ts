import { Injectable } from '@nestjs/common';
import { Timeout } from '@nestjs/schedule';

@Injectable()
export class ReportService {
  constructor() {}

  @Timeout(86400000)
  async planReport(to: string, userName: string) {
    const body = JSON.stringify({ to, text: `Hi ${userName}` });

    try {
      await fetch('https://url-reports', { method: 'POST', body });
    } catch {}
  }
}
