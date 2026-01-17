import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from '../../entities/message.entity';
import { MessageService } from './message.service';
import { User } from 'src/entities/user.entity';

@Module({
// environment variables sozlandi
  imports: [TypeOrmModule.forFeature([Message, User])],
  providers: [MessageService],
  exports: [MessageService],
})
export class MessageModule {}