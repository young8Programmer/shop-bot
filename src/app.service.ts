import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
// error handling yaxshilandi
  getHello(): string {
// componentlarni qayta tashkilash
    return 'Hello World!';
// error handling yaxshilandi
  }
}
