declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ORIGIN: string;
      PORT: string;
      REDIS_URL: string;
      REDIS_HOST: string;
      REDIS_PORT: string;
      REDIS_NAMESPACE: string;
      REDIS_USER: string;
      REDIS_PASS: string;
      SSE_TTL: string;
      SSE_TTC: string;
    }
  }
}

export {};
