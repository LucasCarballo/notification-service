import { Injectable } from '@nestjs/common';
import { EmailService } from './email/email.service';
import { EmailType } from './enums/emailType';

@Injectable()
export class AppService {
  constructor(private readonly emailService: EmailService) { }

  async send(type: EmailType, userId: string, message: string) {
    switch (type) {
      case EmailType.Status:
        await this.emailService.statusUpdate({ to: userId, data: message });
        break;
      case EmailType.News:
        await this.emailService.news({ to: userId, data: message });
        break;
      case EmailType.Invitation:
        await this.emailService.invitations({ to: userId, data: message });
        break;
    }
  }
}
