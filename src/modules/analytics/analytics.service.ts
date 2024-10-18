import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsService {
  async sendAnalyticsData(userEmail: string) {
    const body = JSON.stringify({ userEmail });

    try {
      await fetch('https://url-analytics', { method: 'POST', body });
    } catch {}
    return;
  }
}
