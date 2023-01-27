import { Injectable, NotFoundException } from '@nestjs/common';
import { Task ,TaskStatus } from './tasks.model';
import {v4 as uuid} from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';

@Injectable()
export class TasksService {
    private tasks:Task[] = [];

    getAllTasks():Task[]{
        return this.tasks;
    }


    getTaskWithFilter(filterDto:GetTaskFilterDto):Task[]{
        const {status, search} = filterDto;  
        
        let tasks= this.getAllTasks();
        
        if(status){
            tasks = tasks.filter((task)=>task.status ===status)
        }
        if(search){
            tasks = tasks.filter((task)=>{
                if(task.title.includes(search) || task.description.includes(search)){
                    return true;
                }
                return false;
            })
        }
        return tasks;
    }

    //createTask(title:string, description:string):Task { //without dto
    createTask(createTaskDto:CreateTaskDto):Task {
        const {title, description} = createTaskDto // using dto
        const task:Task ={
            id: uuid(),
            title:title,
            description:description,
            status: TaskStatus.DONE,
        }
        this.tasks.push(task);
        return task
    }
    getTaskId(id:string):Task {
        const found = this.tasks.find((task)=> task.id ===id);
        if(!found){
            throw new NotFoundException(`Task by Id ${id} is Not found`);
        }
        return found;
    }
    delTaskById(id:string):void {
        const found = this.getTaskId(id);
        this.tasks = this.tasks.filter((data)=>data.id !==found.id);
    }

    //update status is not working
    updateTaskStatus(id:string, status:TaskStatus){
        const task1 = this.getTaskId(id);
        task1.status = status;
        return task1;
    }

    

}
