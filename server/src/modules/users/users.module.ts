import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Conversation } from '../../entities/Conversation.entity';
import { User } from '../../entities/User.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  imports: [TypeOrmModule.forFeature([User, Conversation])],
  providers: [UsersService]
})
export class UsersModule {}
