import { Module } from '@nestjs/common';
import { GraphQLModule as GraphQL } from '@nestjs/graphql';


@Module({
  imports: [
    GraphQL.forRoot({
      autoSchemaFile: 'schema.gql',
      buildSchemaOptions: {
        numberScalarMode: 'integer',
        dateScalarMode: 'timestamp'
      }
    }),
  ],
  exports: [GraphQL],
})
export class GraphQLModule {}
