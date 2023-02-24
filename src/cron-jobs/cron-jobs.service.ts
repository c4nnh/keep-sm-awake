import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CronJobsService {
  constructor(private readonly httpService: HttpService) {}

  @Cron('0 */5 * * * *')
  async keepSMAwake() {
    const resp = await firstValueFrom(
      this.httpService.get(process.env.SM_HEALTH_CHECK_END_POINT),
    );
    console.log(`Call to SM to keep awake: ${new Date()}`);
    console.log(resp.data ? 'Successfull' : 'Failed');
  }
}
