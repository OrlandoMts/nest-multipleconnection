import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ReportModule } from './report/report.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27019/moc_db', {
      connectionName: 'mocDb',
    }),
    ReportModule,
  ],
})
export class MocModule {}
