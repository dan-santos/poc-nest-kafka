import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './dto/get-user-request.dto';

@Injectable()
export class AppService {
  private readonly fakerUsers: any[] = [
    {
      userId: '123',
      stripeUserId: 'ABC',
    },
    {
      userId: '456',
      stripeUserId: 'DEF',
    },
  ];

  getUser(getUserRequest: GetUserRequest) {
    return this.fakerUsers.find(
      (user) => user.userId === getUserRequest.userId,
    );
  }
}
