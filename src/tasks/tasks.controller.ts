import { Body, Query, Param, Controller, Get, Post, Delete, Patch } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { Task, TaskStatus } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService){}

    @Get()
    getTask(@Query() filterDto:GetTaskFilterDto):Task[]{
        if(Object.keys(filterDto).length){
            return this.tasksService.getTaskWithFilter(filterDto);
        }else{
            return this.tasksService.getAllTasks();
        }
    }

    @Get('/:id')
    getTaskId(@Param('id') id:string):Task{
        return this.tasksService.getTaskId(id)
    }

    //without DTO
   /* @Post()
    createTask(@Body() title:string, @Body('description') description:string){
        return this.tasksService.createTask(title, description);
        //console.log(title,description);
    }*/

    @Post()
    createTask(@Body() createTaskDto:CreateTaskDto){
        return this.tasksService.createTask(createTaskDto);
        //console.log(title,description);
    }

    @Delete('/:id')
    delTaskById(@Param('id') id:string ):void{
        return this.tasksService.delTaskById(id)
    }

    @Patch('/:id/status')
    updateTaskStatus(@Param('id') id:string, @Body('status') status:TaskStatus){
        return this.tasksService.updateTaskStatus(id, status);
    }
    
}
