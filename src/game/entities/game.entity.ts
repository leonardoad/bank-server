import { nanoid } from 'nanoid-good';

export class Game {
  constructor(baseAmount: number) {
    this.baseAmount = baseAmount;
    this._id = nanoid(32)();
    this.code = nanoid(3)();
  }
  _id: string;
  baseAmount: number;
  code: string;
}
