import { Controller, Get } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('api')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get('data')
  getData() {
    return this.dataService.getData();
  }
}
