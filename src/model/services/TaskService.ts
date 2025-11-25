import { TaskRepositoryContract } from "../../contracts/task/TaskRepositoryContract ";
import { ListOutputDto, TaskServiceContract } from "../../contracts/task/TaskServiceContract";

export class TaskService implements TaskServiceContract{
    
    private constructor(readonly TaskRepository: TaskRepositoryContract){}

    public static create(TaskRepository: TaskRepositoryContract){
        return new TaskService(TaskRepository);
    }

    public async list(): Promise<ListOutputDto> {
        const aTasks = await this.TaskRepository.list();
        
        const task = aTasks.map((t)=>{
            return {
                id: t.id,
                title: t.title,
                description : t.description,
                status : t.status,
                created: t.created
            };       
        });

        const outuput: ListOutputDto = {
            task
        };

        return outuput;
    }
}