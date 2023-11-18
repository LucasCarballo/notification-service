import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { EmailService } from './email/email.service';
import { BaseLimiterGuard } from './guards/base-limiter.guard';
import { RecipientsRepositoryService } from './recipients-repository/recipients-repository.service';

@Module({
  imports: [
    // ThrottlerModule.forRoot([
    //   {
    //     ttl: 60000,
    //     limit: 10,
    //   },
    // ]),
    EmailModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_GUARD,
    //   useClass: ThrottlerGuard,
    // },
    EmailService,
    RecipientsRepositoryService,
    BaseLimiterGuard,
  ],
})
export class AppModule { }
