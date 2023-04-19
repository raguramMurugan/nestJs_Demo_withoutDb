import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHelloWorld() : {name : String, age :number} {
    return {name : 'Sumithra', age :24};
  }
}
