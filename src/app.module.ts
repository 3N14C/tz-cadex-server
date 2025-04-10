import { Module } from '@nestjs/common';
import { ContactMessageModule } from './contact-message/contact-message.module';
import { ConfigModule } from '@nestjs/config';
import { ContactEmailModule } from './contact-email/contact-email.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ContactMessageModule,
    ContactEmailModule,
  ],
})
export class AppModule {}
