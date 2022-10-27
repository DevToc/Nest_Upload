import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities'
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

//forfeature : we can ue User in this module

@Module
({
    imports: [TypeOrmModule.forFeature([User]),],
    providers: [UserService],
    controllers: [UserController],
})

export  class UserModule{}