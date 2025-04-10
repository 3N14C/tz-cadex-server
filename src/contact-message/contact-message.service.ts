import { Injectable, Logger } from '@nestjs/common';
import { SendMessageDto } from './dto/send-message.dto';

@Injectable()
export class ContactMessageService {
  constructor() {}

  async sendMessage(dto: SendMessageDto) {
    Logger.log(dto);
    return `Thank you for your interest, ${dto.name}`;
  }
}
