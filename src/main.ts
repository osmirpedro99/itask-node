import { Task } from "./model/entities/Task";


const title = 'Tarefa teste';
const description = 'Esta e uma tarefa de teste';
const status = 'COMPLETED';

const task = Task.create(title, description,status);

console.log(task.props);