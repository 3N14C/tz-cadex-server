import { Controller } from '@nestjs/common';
import { ContactEmailService } from './contact-email.service';

@Controller('contact-email')
export class ContactEmailController {
  constructor(private readonly contactEmailService: ContactEmailService) {}
}
