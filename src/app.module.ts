import { Module } from '@nestjs/common';
import { HealthController } from './health/health.controller';
import { DataModule } from './data/data.module';

@Module({
  imports: [DataModule],
  controllers: [HealthController],
})
export class AppModule {}
