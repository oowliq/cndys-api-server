import { Module } from '@nestjs/common';
import { AlbumsResolvers } from './albums.resolvers';
import { AlbumsService } from './albums.service';

@Module({
    providers: [AlbumsService, AlbumsResolvers],
})
export class AlbumsModule {}
