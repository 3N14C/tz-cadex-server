import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SendMessageDto {
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'Name must be a string' })
  name: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Email is invalid' })
    email: string

  @IsNotEmpty({ message: 'Message is required' })
  @IsString({ message: 'Message must be a string' })
  message: string;
}
