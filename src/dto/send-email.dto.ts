import { ApiProperty } from '@nestjs/swagger';
import { EmailType } from 'src/enums/emailType';

export class SendEmailDto {
  @ApiProperty({
    enum: EmailType,
  })
  type: EmailType;

  @ApiProperty()
  to: string;

  @ApiProperty()
  message: string;
}
