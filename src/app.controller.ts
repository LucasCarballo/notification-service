import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { SendEmailDto } from './dto/send-email.dto';
import { InvitationLimiterGuard } from './guards/invitation-limiter/invitation-limiter.guard';
import { NewsLimiterGuard } from './guards/news-limiter/news-limiter.guard';
import { StatusLimiterGuard } from './guards/status-limiter/status-limiter.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  @UseGuards(StatusLimiterGuard, InvitationLimiterGuard, NewsLimiterGuard)
  async sendEmail(@Body() sendEmailDto: SendEmailDto) {
    await this.appService.send(
      sendEmailDto.type,
      sendEmailDto.to,
      sendEmailDto.message,
    );
  }
}
