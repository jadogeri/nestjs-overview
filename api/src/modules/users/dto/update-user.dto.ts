import { ApiProperty } from '@nestjs/swagger';

import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
    name?: string;
    @ApiProperty({ example: 'john.doe@example.com', description: 'The email of the user' })
    email?: string;
    @ApiProperty({ example: 'password123', description: 'The password of the user' })
    password?: string;
}