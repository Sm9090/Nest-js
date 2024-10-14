import { Injectable } from '@nestjs/common';
import { GetAllUserDto } from './dtos/user-get.dtos';

export interface userModel {
  id: number;
  name: string;
  email: string;
  gender: string;
  isMarried: boolean;
}

@Injectable()
export class UsersService {
  users: userModel[] = [
    {
      id: 1,
      name: 'jhon',
      email: 'jhon@gmail.com',
      gender: 'male',
      isMarried: false,
    },
    {
      id: 2,
      name: 'mark',
      email: 'mark@gmail.com',
      gender: 'male',
      isMarried: true,
    },
    {
      id: 3,
      name: 'sania',
      email: 'sania@gmail.com',
      gender: 'female',
      isMarried: true,
    },
    {
      id: 4,
      name: 'jhon',
      email: 'jhon@gmail.com',
      gender: 'male',
      isMarried: false,
    },
    {
      id: 5,
      name: 'mark',
      email: 'mark@gmail.com',
      gender: 'male',
      isMarried: true,
    },
    {
      id: 6,
      name: 'sania',
      email: 'sania@gmail.com',
      gender: 'female',
      isMarried: true,
    },
    {
      id: 7,
      name: 'jhon',
      email: 'jhon@gmail.com',
      gender: 'male',
      isMarried: false,
    },
    {
      id: 8,
      name: 'mark',
      email: 'mark@gmail.com',
      gender: 'male',
      isMarried: true,
    },
    {
      id: 9,
      name: 'sania',
      email: 'sania@gmail.com',
      gender: 'female',
      isMarried: true,
    },
    {
      id: 10,
      name: 'jhon',
      email: 'jhon@gmail.com',
      gender: 'male',
      isMarried: false,
    },
    {
      id: 11,
      name: 'mark',
      email: 'mark@gmail.com',
      gender: 'male',
      isMarried: true,
    },
    {
      id: 12,
      name: 'sania',
      email: 'sania@gmail.com',
      gender: 'female',
      isMarried: true,
    },
  ];

  getAllUsers(query: GetAllUserDto) {
    const page = query.page;
    const limit = query.limit;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    console.log(startIndex);
    console.log(endIndex, 'end');
    const paginatedUsers = this.users.slice(startIndex, endIndex);

    return paginatedUsers;
  }
  getUserById(id: number) {
    console.log(id);
    return this.users.find((user) => user.id === id);
  }

  createUser(user: userModel) {
    this.users.push({...user});
  }
}
