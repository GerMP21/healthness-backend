import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://app:UdykBLKAihKWL2aA@serverlessinstance0.20oqd.mongodb.net/healthness?retryWrites=true&w=majority', {
            useNewUrlParser: true
        }),
  ],
  exports: [MongooseModule],
})
export class GraphQLModule {}