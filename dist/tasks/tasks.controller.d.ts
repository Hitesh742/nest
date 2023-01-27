import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { Task, TaskStatus } from './tasks.model';
import { TasksService } from './tasks.service';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getTask(filterDto: GetTaskFilterDto): Task[];
    getTaskId(id: string): Task;
    createTask(createTaskDto: CreateTaskDto): Task;
    delTaskById(id: string): void;
    updateTaskStatus(id: string, status: TaskStatus): Task;
}
