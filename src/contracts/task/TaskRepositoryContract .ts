import { Task } from "../../model/entities/Task";

export interface TaskRepositoryContract {
    save(task: Task) : Promise<void>;
    list(): Promise<Task[]>;
}