import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27019/use_db', {
      connectionName: 'useDb',
    }),
    MongooseModule.forRoot('mongodb://localhost:27019/use_db', {
      connectionName: 'roleDb',
    }),
    UserModule,
    RoleModule,
  ],
})
export class UseModule {}
