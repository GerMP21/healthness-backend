import { Module } from '@nestjs/common';
import { GraphQLModule } from './common/modules/graphql/graphql.module';
import { DatabaseModule } from './common/modules/database/database.module';
import { ExercisesModule } from './modules/exercises/exercises.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    GraphQLModule,
    DatabaseModule, 
    ExercisesModule],
})
export class AppModule { }
