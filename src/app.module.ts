import { Module } from '@nestjs/common';
import { GraphQLModule } from './common/modules/graphql/graphql.module';
import { DatabaseModule } from './common/modules/database/database.module';

@Module({
  imports: [GraphQLModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
