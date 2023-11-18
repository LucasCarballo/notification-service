import { Injectable } from '@nestjs/common';

interface Email {
  to: string;
  data: any;
}

@Injectable()
export class EmailService {
  constructor() { }

  async statusUpdate(email: Email) {
    const { to, data } = email;
    console.log(`status email sent to ${to} with ${data}`);
  }

  async news(email: Email) {
    const { to, data } = email;
    console.log(`news email sent to ${to} with ${data}`);
  }

  async invitations(email: Email) {
    const { to, data } = email;
    console.log(`invitations email sent to ${to} with ${data}`);
  }
}
