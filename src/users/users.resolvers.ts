import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './models/user.model';
import { UsersService } from './users.service';

@Resolver((of) => User)
export class UsersResolvers {
    constructor(private usersService: UsersService) {}

    @Mutation((returns) => User)
    async createUser(@Args({ name: 'username', type: () => String }) username: string): Promise<User> {
        return await this.usersService.create({ username });
    }

    @Query((returns) => User)
    async user(@Args({ name: 'username', type: () => String }) username: string): Promise<User> {
        return (await this.usersService.find({ username })) || null;
    }

    @Query((returns) => [User])
    async users(): Promise<User[]> {
        return await this.usersService.findAll();
    }
}
