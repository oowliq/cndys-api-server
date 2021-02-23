import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AlbumsModule } from './albums/albums.module';
import { MongooseService } from './config/mongo';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        GraphQLModule.forRoot({
            playground: true,
            autoSchemaFile: true,
            sortSchema: true,
        }),
        MongooseModule.forRootAsync({ useClass: MongooseService }),
        AlbumsModule,
        UsersModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
