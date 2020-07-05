import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaratonaModule } from './maratona/maratona.module';
import { TypeOrmModule } from '@nestjs/typeorm';


const dbModule = TypeOrmModule.forRoot({
  type: 'sqlite',
  database: 'maratona_db',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
})

@Module({
  imports: [MaratonaModule, dbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
