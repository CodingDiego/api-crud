import { Module } from '@nestjs/common/decorators/modules';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers:[AuthController],
    providers:[AuthService],
})

export class AuthModule {}
