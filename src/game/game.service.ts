import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {
  games: Game[] = [];
  async create(createGameDto: CreateGameDto) {
    console.log(`createGameDto`, createGameDto);
    const game = await new Game(createGameDto.baseAmount);
    console.log(`game`, game);
    this.games.push(game);
    return game;
  }

  findAll() {
    return this.games;
  }

  findOne(_id: string) {
    return this.games.find((game) => game._id === _id);
  }

  update(_id: string, updateGameDto: UpdateGameDto) {
    const games = this.games.find((game) => game._id === _id);
    games[0].baseAmount = updateGameDto.baseAmount;
    return games[0];
  }

  remove(_id: string) {
    const index = this.games.findIndex((game) => game._id === _id);
    this.games.splice(index, 1);
  }
}
