import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('health-check')
  healthCheck(): boolean {
    console.log(`Health check from SM: ${new Date()}`);
    return true;
  }
}
