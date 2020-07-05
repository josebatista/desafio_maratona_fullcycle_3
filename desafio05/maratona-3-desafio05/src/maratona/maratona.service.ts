import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Live } from '../live.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MaratonaService {

    constructor(
        @InjectRepository(Live)
        private liveRepository: Repository<Live>,
        ) {}

    async getLives() {
        return await this.liveRepository.find()
    }

    createLive(value: string) {
        return this.liveRepository.create({title: value})
    }

    async saveData(live: Live[]) {
        return await this.liveRepository.save(live)
    }
}
