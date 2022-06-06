import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';

const games: Game[] = [];
@Injectable()
export class GameService {
  create(createGameDto: CreateGameDto) {
    const game = new Game(createGameDto.baseAmount);
    games.push(game);
    return game;
  }

  findAll() {
    return games;
  }

  findOne(_id: string) {
    return games.find((game) => game._id === _id);
  }

  update(_id: string, updateGameDto: UpdateGameDto) {
    const game = games.find((game) => game._id === _id);
    game.baseAmount = updateGameDto.baseAmount;
    return game;
  }

  remove(_id: string) {
    const index = games.findIndex((game) => game._id === _id);
    games.splice(index, 1);
  }
}
