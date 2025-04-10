import { Module } from '@nestjs/common';
import { ContactEmailService } from './contact-email.service';
import { ContactEmailController } from './contact-email.controller';

@Module({
  controllers: [ContactEmailController],
  providers: [ContactEmailService],
})
export class ContactEmailModule {}
