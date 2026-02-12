import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DataService } from './data.service';
import { AddPlayersDto } from './dto/add-players.dto';

@ApiTags('data')
@Controller('api')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get('data')
  getData() {
    return this.dataService.getData();
  }

  @Post('players')
  @ApiOperation({ summary: 'Ajouter des joueurs dans data.json' })
  @ApiBody({ type: AddPlayersDto })
  addPlayers(@Body() dto: AddPlayersDto) {
    return this.dataService.addPlayers(dto);
  }
}
