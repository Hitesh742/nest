import { Task, TaskStatus } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
export declare class TasksService {
    private tasks;
    getAllTasks(): Task[];
    getTaskWithFilter(filterDto: GetTaskFilterDto): Task[];
    createTask(createTaskDto: CreateTaskDto): Task;
    getTaskId(id: string): Task;
    delTaskById(id: string): void;
    updateTaskStatus(id: string, status: TaskStatus): Task;
}
