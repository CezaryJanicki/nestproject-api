import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const name = 'NestJS';
    const text = `Hello ${name}!`;
    return text;
  }
}
