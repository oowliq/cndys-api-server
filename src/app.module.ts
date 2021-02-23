import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AlbumsModule } from './albums/albums.module';
import { AlbumsResolvers } from './albums/albums.resolvers';

@Module({
    imports: [
        GraphQLModule.forRoot({
            playground: true,
            autoSchemaFile: true,
            sortSchema: true,
        }),
        AlbumsModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
