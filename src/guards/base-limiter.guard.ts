import { Injectable } from '@nestjs/common';
import { ThrottlerException } from '@nestjs/throttler';
import { EmailType } from 'src/enums/emailType';
import { RecipientsRepositoryService } from 'src/recipients-repository/recipients-repository.service';

@Injectable()
export class BaseLimiterGuard {
  constructor(
    private readonly recipientsRepository: RecipientsRepositoryService,
  ) { }

  canActivate(
    request: any,
    emailType: EmailType,
    ttl: number,
    maxAmount: number,
  ): boolean {
    const to = request.body?.to;
    const type = request.body?.type;

    if (type !== emailType) {
      return true;
    }

    const isValid = this.isValid(to, type, ttl, maxAmount);
    if (!isValid) throw new ThrottlerException();
    return isValid;
  }

  private isValid(to: string, type: EmailType, ttl: number, maxAmount: number) {
    const recipient = this.recipientsRepository.get(to, type);

    if (!recipient) {
      this.recipientsRepository.add(to, type);
      return true;
    }

    if (recipient.lastSent > Date.now() - ttl) {
      if (recipient.times >= maxAmount) {
        return false;
      } else {
        this.recipientsRepository.add(to, type);
        return true;
      }
    } else {
      this.recipientsRepository.update(to, type, 1);
      return true;
    }
  }
}
