import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToClass } from 'class-transformer';
import { Model } from 'mongoose';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user-transformer.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name, 'useDb') private readonly userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const userDto = plainToClass(UserDto, {
      account_data: {
        numberemployee: createUserDto.numberemployee,
        email: createUserDto.email,
      },
      personal_data: {
        firstname: createUserDto.firstname,
        lastname: createUserDto.lastname,
        birth: new Date(createUserDto.birth),
      },
    });

    const createdUser = await this.userModel.create(userDto);
    return createdUser.save();
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    console.log(updateUserDto);
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
