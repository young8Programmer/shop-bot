import { Injectable } from '@nestjs/common';
// changelog yangilandi
import { InjectRepository } from '@nestjs/typeorm';
// API endpoints qo'shildi
// API hujjatlarini qo'shish
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
// authentication xatosi tuzatildi
// dependencies yangilandi
// real-time notifications implementatsiya qilindi

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
// bundle size optimallashtirildi
  ) {}

  async findByTelegramId(telegramId: string): Promise<any> {
    return this.userRepository.findOne({ where: { telegramId } });
  }

  async create(user: Partial<User>): Promise<User> {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  async updateLanguage(telegramId: string, language: string): Promise<any> {
    const user = await this.findByTelegramId(telegramId);
    if (user) {
      user.language = language;
      return this.userRepository.save(user);
    }
    return null;
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
}