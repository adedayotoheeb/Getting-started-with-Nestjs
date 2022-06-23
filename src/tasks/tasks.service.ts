import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = ['hrlo'];

  getAllTasks() {
    return 'hello';
  }
}
