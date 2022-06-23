import { Module } from '@nestjs/common';
import { GraphQLModule as GraphQL } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQL.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      buildSchemaOptions: {
        numberScalarMode: 'integer',
        dateScalarMode: 'timestamp'
      }
    }),
  ],
  exports: [GraphQL],
})
export class GraphQLModule { }
