import { PrismaClient } from "@prisma/client/extension";
import { TaskRepositoryContract } from "../../contracts/task/TaskRepositoryContract ";
import { Task, TaskProps } from "../entities/Task";
import { create } from "domain";

export class TaskRepository implements TaskRepositoryContract{

    private constructor(readonly prisma :PrismaClient){}

    public static build(prisma :PrismaClient){
        return new TaskRepository(prisma);
    }

    public async save(task: Task): Promise<void> {

        const data = {
            id : task.id,
            title : task.title,
            description : task.description,
            status : task.status,
            created : task.created,
        };

        await this.prisma.task.create({
            data
        });
    }

    public async list(): Promise<Task[]> {
        const aTasks = await this.prisma.task.findMany();

        const tasks : Task[] = aTasks.map((t: TaskProps) => {
            return Task.with(t);
        });

        return tasks;
    }
}