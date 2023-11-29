import { Module } from '@nestjs/common/decorators/modules';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    controllers:[AuthController],
    providers:[AuthService],
})

export class AuthModule {}
