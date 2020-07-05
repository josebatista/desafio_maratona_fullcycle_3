import { Module } from '@nestjs/common';
import { MaratonaController } from './maratona.controller';
import { MaratonaService } from './maratona.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Live } from '../live.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Live]),
      ],
    controllers: [MaratonaController],
    providers: [MaratonaService],
})
export class MaratonaModule {}
