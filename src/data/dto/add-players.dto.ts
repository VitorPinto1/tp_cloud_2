import { ApiProperty } from '@nestjs/swagger';

export class AddPlayersDto {
  @ApiProperty({ example: 'RealMadrid' })
  team: string;

  @ApiProperty({ example: '2013-14' })
  season: string;

  @ApiProperty({
    enum: ['goalkeepers', 'defenders', 'midfielders', 'forwards'],
    example: 'forwards',
  })
  position: 'goalkeepers' | 'defenders' | 'midfielders' | 'forwards';

  @ApiProperty({ type: [String], example: ['Nouveau Joueur'] })
  players: string[];
}

