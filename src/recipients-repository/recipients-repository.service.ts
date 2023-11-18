import { Injectable } from '@nestjs/common';
import { EmailType } from 'src/enums/emailType';
import { Recipient } from 'src/models/recipient.model';

@Injectable()
export class RecipientsRepositoryService {
  localStorate: Map<string, Recipient>;

  constructor() {
    this.localStorate = new Map();
  }

  add(recipient: string, type: EmailType) {
    const key = this.buildKey(recipient, type);
    let dataToSave: any = {
      recipient: recipient,
      lastSent: Date.now(),
      type: type,
    };

    if (this.localStorate.has(key)) {
      const recipientData = this.localStorate.get(key);

      dataToSave = {
        ...dataToSave,
        times: recipientData.times + 1,
      };
    } else {
      dataToSave = {
        ...dataToSave,
        times: 1,
      };
    }

    this.localStorate.set(key, dataToSave);
  }

  get(recipient: string, type: EmailType): Recipient {
    const key = this.buildKey(recipient, type);
    if (!this.localStorate.has(key)) {
      return;
    }

    return this.localStorate.get(key);
  }

  update(recipient: string, type: EmailType, times: number) {
    const key = this.buildKey(recipient, type);
    if (!this.localStorate.has(key)) return;
    this.localStorate.set(key, {
      recipient: recipient,
      type: type,
      times: times,
      lastSent: Date.now(),
    });
  }

  private buildKey(recipient: string, type: EmailType): string {
    return recipient + type.toString();
  }
}
