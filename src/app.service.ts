import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
// error handling yaxshilandi
  getHello(): string {
    return 'Hello World!';
  }
}
