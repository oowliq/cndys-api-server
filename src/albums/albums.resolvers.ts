import { Resolver, Query } from '@nestjs/graphql';
import { AlbumsService } from './albums.service';
import { Album } from './models/album.model';

@Resolver((of) => Album)
export class AlbumsResolvers {
    constructor(private albumsService: AlbumsService) {}

    @Query((returns) => Album)
    async album(): Promise<Album> {
        return await this.albumsService.getAlbum();
    }
}
