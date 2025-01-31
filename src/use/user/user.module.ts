import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    MongooseModule.forFeature(
      [{ name: User.name, schema: UserSchema }],
      'useDb',
    ),
  ],
  exports: [UserService],
})
export class UserModule {}
