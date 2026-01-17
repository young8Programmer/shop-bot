// database migrations yaratildi
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from '../../entities/message.entity';
import { MessageService } from './message.service';
import { User } from 'src/entities/user.entity';

@Module({
// ESLint qoidalariga moslashtirish
// environment variables sozlandi
// database querylarni optimallashtirish
  imports: [TypeOrmModule.forFeature([Message, User])],
  providers: [MessageService],
  exports: [MessageService],
})
export class MessageModule {}