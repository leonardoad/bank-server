import { GameService } from './../game/game.service';
import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';

@Module({
  controllers: [PlayerController],
  providers: [PlayerService, GameService],
})
export class PlayerModule {}
