import { Controller, Get } from '@nestjs/common';
import { MaratonaService } from './maratona.service';
import { Live } from '../live.entity';

@Controller('maratona')
export class MaratonaController {
    constructor(private readonly maratornaService: MaratonaService) {}

    @Get()
    getLives() {
        return this.maratornaService.getLives()
    }

    @Get('cadastrar')
    cadastrar() {

        let lives = Array<Live>()
        
        lives.push(this.maratornaService.createLive("O universo do desenvolvimento no Mercado Livre"))
        lives.push(this.maratornaService.createLive("O ecossistema de frameworks Javascript"))
        lives.push(this.maratornaService.createLive("As grandes oportunidades para Full Cycle Developers"))
        lives.push(this.maratornaService.createLive("Serverless, o mínimo que todo dev precisa saber"))
        lives.push(this.maratornaService.createLive("Produtividade eXtrema com Python e Django"))
        lives.push(this.maratornaService.createLive("Full Cycle Developer: O passo a passo - Live no Instagram"))
        lives.push(this.maratornaService.createLive("DevOps e Containers: do Docker ao Kubernetes"))
        lives.push(this.maratornaService.createLive("Microsserviços e Integração Contínua com Sonarqube"))
        lives.push(this.maratornaService.createLive("Monitoramento Inteligente + Encerramento"))

        return this.maratornaService.saveData(lives)
    }

}
