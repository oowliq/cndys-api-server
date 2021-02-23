import * as dotenv from 'dotenv';

dotenv.config();

export const APP_PORT: number = process.env.APP_PORT ? Number(process.env.APP_PORT) : 3000;

export const MONGO_HOST: string = process.env.MONGO_HOST ?? 'localhost';

export const MONGO_USER: string = process.env.MONGO_USER ?? 'root';

export const MONGO_PASSWORD: string = process.env.MONGO_PASSWORD ?? 'root';

export const MONGO_DATABASE: string = process.env.MONGO_DATABASE ?? 'test';

export const SPOTIFY_CLIENT_ID: string = process.env.SPOTIFY_CLIENT_ID ?? '';

export const SPOTIFY_CLIENT_SECRET: string = process.env.SPOTIFY_CLIENT_SECRET ?? '';

export const SPOTIFY_CALLBACK_URL: string =
    process.env.SPOTIFY_CALLBACK_URL ?? 'http://localhost:300/auth/spotify/callback';
