import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/Entities';
import { Repository } from 'typeorm';
import { CreateUserDto } from './users.dtos';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
      
  createUser(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }
      
  findUsersById(id: number) {
    return this.userRepository.findOneById(id);
  }
  getUsers (){
    return this.userRepository.find();
  }
}