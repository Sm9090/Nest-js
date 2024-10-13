import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './user.services';

//http://localhost:3000/users
@Controller('users')
export class UserController {
  @Get()
  getUsers(@Query() query: any) {
    const usersService = new UsersService();
    console.log(query)
    if(query.gender){
      return usersService.getAllUsers().filter(user => user.gender === query.gender)
    }
    return usersService.getAllUsers();
  }
  @Get(':id')
  getUserById(@Param() param:any) {
    const usersService = new UsersService();
    return usersService.getUserById(Number(`${param.id}`));
  }
  @Post()
  createUser() {
    const user = {
      id: 1,
      name: 'hamza',
      age: 20,
      gender: 'shemale',
      isMarried: false,
    };
    const usersService = new UsersService();
    usersService.createUser(user);
    return 'A new user has been created!';
  }
}
