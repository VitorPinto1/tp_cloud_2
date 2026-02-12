import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { AddPlayersDto } from './dto/add-players.dto';

@Injectable()
export class DataService {
  private readonly dataPath = path.join(process.cwd(), 'data', 'data.json');

  getData(): unknown {
    const raw = fs.readFileSync(this.dataPath, 'utf-8');
    return JSON.parse(raw);
  }

  addPlayers(dto: AddPlayersDto) {
    const raw = fs.readFileSync(this.dataPath, 'utf-8');
    const data = JSON.parse(raw);

    if (!data[dto.team]) {
      data[dto.team] = [];
    }

    let season = data[dto.team].find(
      (s: any) => s.season === dto.season,
    );

    if (!season) {
      season = {
        season: dto.season,
        players: {
          goalkeepers: [],
          defenders: [],
          midfielders: [],
          forwards: [],
        },
      };
      data[dto.team].push(season);
    }

    if (!season.players[dto.position]) {
      season.players[dto.position] = [];
    }

    season.players[dto.position].push(...dto.players);

    fs.writeFileSync(this.dataPath, JSON.stringify(data, null, 2), 'utf-8');
    return season;
  }
}
