import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import Task from './task.entity';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), AuthModule],
  providers: [TasksService],
  controllers: [TasksController],
})
export class TasksModule {}
