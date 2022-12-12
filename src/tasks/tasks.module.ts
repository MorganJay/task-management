import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TasksService } from './tasks.service';
import { TaskRepository } from './task.repository';
import { TasksController } from './tasks.controller';
import Task from './task.entity';

@Module({
  // imports: [TypeOrmModule.forFeature([TaskRepository])],
  imports: [TypeOrmModule.forFeature([Task])],
  providers: [TasksService],
  controllers: [TasksController],
})
export class TasksModule {}
