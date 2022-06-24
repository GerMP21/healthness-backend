import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_INSTANCE}.1vh8u.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`, 
        {
            useNewUrlParser: true
        }),
    ],
    exports: [MongooseModule],
})
export class DatabaseModule { }
