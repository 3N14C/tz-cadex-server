import { Body, Controller, Post } from '@nestjs/common';
import { ContactMessageService } from './contact-message.service';
import { SendMessageDto } from './dto/send-message.dto';

@Controller('contact-message')
export class ContactMessageController {
  constructor(private readonly contactMessageService: ContactMessageService) {}

  @Post('/')
  async sendMessage(@Body() dto: SendMessageDto) {
    return await this.contactMessageService.sendMessage(dto);
  }
}
