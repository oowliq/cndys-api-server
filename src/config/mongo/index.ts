import { Injectable } from '@nestjs/common';
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';
import { MONGO_DATABASE, MONGO_HOST, MONGO_PASSWORD, MONGO_USER } from 'src/enviroments';

@Injectable()
export class MongooseService implements MongooseOptionsFactory {
    private getUri(): string {
        return `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DATABASE}?retryWrites=true&w=majority`;
    }

    async createMongooseOptions(): Promise<MongooseModuleOptions> {
        const options: MongooseModuleOptions = {
            uri: this.getUri(),
            useCreateIndex: true,
        };

        return options;
    }
}
