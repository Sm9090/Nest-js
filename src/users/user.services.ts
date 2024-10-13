export interface userModel {
  id: number;
  name: string;
  age: number;
  gender: string;
  isMarried: boolean;
}

export class UsersService {
  users: userModel[] = [
    { id: 1, name: 'jhon', age: 28, gender: 'male', isMarried: false },
    { id: 2, name: 'mark', age: 32, gender: 'male', isMarried: true },
    { id: 3, name: 'sania', age: 25, gender: 'female', isMarried: true },
  ];

  getAllUsers() {
    return this.users;
  }
  getUserById(id: number) {
    console.log(id);
    return this.users.find((user) => user.id === id);
  }

  createUser(user: userModel) {
    this.users.push(user);
  }
}
