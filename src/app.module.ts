import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UseModule } from './use/use.module';
import { MocModule } from './moc/moc.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27019/use_db', {
      connectionName: 'useDb',
    }),
    MongooseModule.forRoot('mongodb://localhost:27019/moc_db', {
      connectionName: 'mocDb',
    }),
    UseModule,
    MocModule,
  ],
})
export class AppModule {}
