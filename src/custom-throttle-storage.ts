import { ThrottlerStorage } from '@nestjs/throttler';
import { ThrottlerStorageRecord } from '@nestjs/throttler/dist/throttler-storage-record.interface';

export class CustomThrottleStorage implements ThrottlerStorage {
  increment(key: string, ttl: number): Promise<ThrottlerStorageRecord> {
    throw new Error('Method not implemented.');
  }
}
