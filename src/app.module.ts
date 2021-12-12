import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { StreamerModule } from './streamer/streamer.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, StreamerModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
