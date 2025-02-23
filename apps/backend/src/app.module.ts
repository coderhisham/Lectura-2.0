import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { envConfig, envValidationSchema } from './config/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [envConfig],
      validationSchema: envValidationSchema,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
