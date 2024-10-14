import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/user-create.dto';
import { GetAllUserDto } from './dtos/user-get.dtos';
import { UsersService } from './user.services';
import { UpdateUserDto } from './dtos/user-update.dto';

//http://localhost:3000/users
@Controller('users')
export class UserController {
  constructor(private usersService: UsersService) {}
  @Get()
  getUsers(@Query() query: GetAllUserDto) {
    console.log(query);
    return this.usersService.getAllUsers(query);
  }
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return this.usersService.getUserById(id);
  }
  @Post()
  createUser(@Body() user: CreateUserDto) {
    console.log(user, 'user');
    this.usersService.createUser(user);
    return 'A new user has been created!';
  }
  @Patch()
  updateUser(@Body() user: UpdateUserDto) {
    console.log(user);
    return 'User updated succesfully';
  }
}
