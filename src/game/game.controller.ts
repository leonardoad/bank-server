import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { TransferDto } from './dto/transfer.dto';

@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  create(@Body() createGameDto: CreateGameDto) {
    return this.gameService.create(createGameDto);
  }

  @Get()
  findAll() {
    return this.gameService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gameService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto) {
    return this.gameService.update(id, updateGameDto);
  }

  @Post(':id/transfer')
  transfer(@Param('id') id: string, @Body() transferDto: TransferDto) {
    const game = this.gameService.findOne(id);
    const playerTo = game.players.find(
      (player) => player._id === transferDto.to,
    );
    playerTo.amount += transferDto.amount;
    const playerFrom = game.players.find(
      (player) => player._id === transferDto.from,
    );
    playerFrom.amount -= transferDto.amount;
    return game;
  }

  @Post(':id/reset')
  reset(@Param('id') id: string) {
    const game = this.gameService.findOne(id);
    for (let i = 0; i < game.players.length; i++) {
      const player = game.players[i];
      player.amount = game.baseAmount;
    }
    return game;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameService.remove(id);
  }

  @Delete(':id/player/:playerId')
  removePlayer(@Param('id') id: string, @Param('playerId') playerId: string) {
    const game = this.gameService.findOne(id);
    const playerIndex = game.players.findIndex(
      (player) => player._id === playerId,
    );
    game.players.splice(playerIndex, 1);
    return game;
  }
}
