import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { EmailType } from 'src/enums/emailType';
import { BaseLimiterGuard } from '../base-limiter.guard';

@Injectable()
export class InvitationLimiterGuard implements CanActivate {
  TTL = 1000 * 60 * 60 * 3;
  MAXAMOUNT = 3;

  constructor(private readonly baseLimiterGuard: BaseLimiterGuard) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return this.baseLimiterGuard.canActivate(
      request,
      EmailType.Invitation,
      this.TTL,
      this.MAXAMOUNT,
    );
  }
}
