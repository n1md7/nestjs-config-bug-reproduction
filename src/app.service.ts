import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly config: ConfigService<NodeJS.ProcessEnv>) {
    const configuration = {
      redisPort: config.get('WRONG_NAME', { infer: true }),
      redisHost: config.get('REDIS_HOST', 'host.local', { infer: true }),
      namespace: config.get<string>('REDIS_NAMESPACE', { infer: true }),
      baseURL: config.get('KC_URL', { infer: true }),
    };
    console.log(configuration);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
