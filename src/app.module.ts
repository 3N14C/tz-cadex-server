import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ContactMessageModule } from './contact-message/contact-message.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ContactMessageModule,
  ],
})
export class AppModule {}
