import { nanoid } from 'nanoid-good';
import { Player } from 'src/player/entities/player.entity';

export class Game {
  constructor(baseAmount: number) {
    this.baseAmount = baseAmount;
    this._id = nanoid(32)();
    this.code = nanoid(3)();
  }
  _id: string;
  baseAmount: number;
  code: string;
  players: Player[] = [];
}
