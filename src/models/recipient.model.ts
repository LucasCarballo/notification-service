import { EmailType } from 'src/enums/emailType';

export class Recipient {
  recipient: string;
  type: EmailType;
  lastSent: number;
  times: number;
}
