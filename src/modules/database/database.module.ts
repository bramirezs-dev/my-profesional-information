import { Global, Module } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import { ConfigService } from '@nestjs/config';
import {MongooseModule} from '@nestjs/mongoose'



@Global()
@Module({
    imports:[
        MongooseModule.forRootAsync({
            useFactory: async (configService:ConfigService)=>{
                return {
                    uri:`mongodb://${(configService.get<string>('MONGO_HOST') || configService.get<string>('mongodbConfig.host'))}`,
                    readPreference:'primary',
                    ssl:false,
                    directConnection:true,
                    dbName: configService.get<string>('MONGO_HOST') || configService.get<string>('mongodbConfig.database')
                }
            },
            inject:[ConfigService]
        }
        ),
    ],
    providers:[{
        provide:'MONGO',
        useFactory: async (configService:ConfigService) => {
            const uri = `mongodb://${(configService.get<string>('MONGO_HOST') || configService.get<string>('mongodbConfig.host')  )}/?readPreference=primary&ssl=false&directConnection=true`;
            const client = new MongoClient(uri);
            await client.connect();
            const database = client.db(configService.get<string>('MONGO_DB')  || configService.get<string>('mongodbConfig.database') );
            return database;
        },
        inject:[ConfigService]
    }],
    exports:['MONGO'],
})
export class DatabaseModule {}
