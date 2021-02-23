import { Injectable } from '@nestjs/common';
import { Album } from './models/album.model';

@Injectable()
export class AlbumsService {
    getAlbum(): Album {
        return {
            id: 1,
        };
    }
}
