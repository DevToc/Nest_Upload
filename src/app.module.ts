import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { ConfigModule,ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

import entities from './entities';

//congigModule : .env global:true in every module usable



@Module({
  imports: [CatsModule,ConfigModule.forRoot({isGlobal:true}),
      TypeOrmModule.forRootAsync({
        imports:[ConfigModule],
        useFactory:(configService:ConfigService)=>({
          type:'postgres',
          host: configService.get('DB_HOST'),
          port: +configService.get<number>('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_NAME'),
          entities: entities,
          synchronize: true,
        }),
        inject:[ConfigService]
      }),
      UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
