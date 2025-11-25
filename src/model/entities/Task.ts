export type TaskProps = {
    id : string;
    title : string;
    description: string;
    status : 'PENDING' | 'COMPLETED';
    created: Date;
}

export class Task {
    private constructor(readonly props : TaskProps){}

    public static create(title:string, description:string, status:'PENDING' | 'COMPLETED'){
        return new Task({
            id: crypto.randomUUID(),
            title,
            description,
            status,
            created: new Date()
        });
    }

    public get id(){
        return this.props.id;
    }

    public get title(){
        return this.props.title;
    }

    public get description(){
        return this.props.description;
    }

    public get status(){
        return this.props.status;
    }

    public get created(){
        return this.props.created;
    }

}