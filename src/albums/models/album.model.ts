import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('Album')
export class Album {
    @Field((type) => Int)
    id: number;
}
