import { TaskRepositoryContract } from "../../../contracts/task/TaskRepositoryContract ";
import { ListOutputDto, TaskServiceContract } from "../../../contracts/task/TaskServiceContract";

export class TaskService implements TaskServiceContract{
    
    private constructor(readonly TaskRepository: TaskRepositoryContract){}

    public static create(TaskRepository: TaskRepositoryContract){
        return new TaskService(TaskRepository);
    }

    public async list(): Promise<ListOutputDto> {
        throw Error("Method not implemented");
    }
}