import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CronJobsService } from './cron-jobs.service';

@Module({
  imports: [HttpModule],
  providers: [CronJobsService],
})
export class CronJobsModule {}
