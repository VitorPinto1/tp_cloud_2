import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class DataService {
  private readonly dataPath = path.join(process.cwd(), 'data', 'data.json');

  getData(): unknown {
    const raw = fs.readFileSync(this.dataPath, 'utf-8');
    return JSON.parse(raw);
  }
}
