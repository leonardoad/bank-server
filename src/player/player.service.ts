import { Injectable } from '@nestjs/common';
import { GameService } from 'src/game/game.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayerService {
  constructor(readonly gameService: GameService) {}

  create(createPlayerDto: CreatePlayerDto) {
    const player = new Player(createPlayerDto.amount, createPlayerDto.name);
    const game = this.gameService.findOne(createPlayerDto.game);
    game.players.push(player);
    return player;
  }

  findAll() {
    return `This action returns all player`;
  }

  findOne(id: number) {
    return `This action returns a #${id} player`;
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    return `This action updates a #${id} player`;
  }

  remove(id: number) {
    return `This action removes a #${id} player`;
  }
}
