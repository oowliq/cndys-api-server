import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
export class User {
    @Field((type) => String)
    username: string;
}
