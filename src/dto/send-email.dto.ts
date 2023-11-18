import { EmailType } from 'src/enums/emailType';

export class SendEmailDto {
  type: EmailType;
  to: string;
  message: string;
}
