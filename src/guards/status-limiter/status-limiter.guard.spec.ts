import { StatusLimiterGuard } from './status-limiter.guard';

describe('StatusLimiterGuard', () => {
  it('should be defined', () => {
    expect(new StatusLimiterGuard()).toBeDefined();
  });
});
