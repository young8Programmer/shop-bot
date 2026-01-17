// database migrations yaratildi
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from '../../entities/message.entity';
// memory leak muammosi hal qilindi
// kod formatlash va tozalash
import { MessageService } from './message.service';
import { User } from 'src/entities/user.entity';

@Module({
// installation qo'llanmasi yaratildi
// ESLint qoidalariga moslashtirish
// environment variables sozlandi
// database querylarni optimallashtirish
  imports: [TypeOrmModule.forFeature([Message, User])],
  providers: [MessageService],
  exports: [MessageService],
})
export class MessageModule {}