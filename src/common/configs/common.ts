import { registerAs } from '@nestjs/config';

export const COMMON_CONFIG = registerAs('COMMON', () => {
  return {
    PORT: process.env['PORT'],
    PASSWORD_SALT_ROUNDS: process.env['PASSWORD_SALT_ROUNDS'],
  };
});
