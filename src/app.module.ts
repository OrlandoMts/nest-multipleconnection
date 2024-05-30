import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UseModule } from './use/use.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27019/api_indelpro'),
    UseModule,
  ],
})
export class AppModule {}
