import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private UserRepository: Repository<UserEntity>,
  ) {}
  create(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.UserRepository.save(createUserDto);
  }

  findAll(): Promise<UserEntity[]> {
    return this.UserRepository.find();
  }

  findOneBy(id: number): Promise<UserEntity> {
    return this.UserRepository.findOneBy({ id: id });
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<UpdateResult> {
    return this.UserRepository.update(id, updateUserDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.UserRepository.delete(id);
  }
}
