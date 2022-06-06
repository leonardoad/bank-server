import { nanoid } from 'nanoid-good';

export class Player {
  constructor(amount: number, name: string) {
    this.amount = amount;
    this.name = name;
    this._id = nanoid(32)();
    this.code = nanoid(3)();
  }
  _id: string;
  name: string;
  amount: number;
  code: string;
}