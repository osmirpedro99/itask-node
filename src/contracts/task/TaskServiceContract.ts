export type ListOutputDto = {
    task: {
        id: string;
        title: string;
        description: string;
        status: 'PENDING' | 'COMPLETED';
        created: Date;
    }
}

export interface TaskServiceContract {
    list(): Promise<ListOutputDto>
}