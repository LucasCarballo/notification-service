import { NewsLimiterGuard } from './news-limiter.guard';

describe('NewsLimiterGuard', () => {
  it('should be defined', () => {
    expect(new NewsLimiterGuard()).toBeDefined();
  });
});
