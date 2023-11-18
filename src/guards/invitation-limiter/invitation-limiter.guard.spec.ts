import { InvitationLimiterGuard } from './invitation-limiter.guard';

describe('InvitationLimiterGuard', () => {
  it('should be defined', () => {
    expect(new InvitationLimiterGuard()).toBeDefined();
  });
});
