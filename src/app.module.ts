import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from './common/modules/graphql/graphql.module';
import { DatabaseModule } from './common/modules/database/database.module';
import { ExercisesModule } from './modules/exercises/exercises.module';
import { WorkoutsModule } from './modules/workouts/workouts.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    GraphQLModule,
    DatabaseModule, 
    ExercisesModule,
    WorkoutsModule
  ],
})
export class AppModule { }
