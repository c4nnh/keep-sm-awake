import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CronJobsModule } from './cron-jobs/cron-jobs.module';

@Module({
  imports: [ConfigModule.forRoot(), ScheduleModule.forRoot(), CronJobsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
