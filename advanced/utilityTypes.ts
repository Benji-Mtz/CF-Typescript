// MappedTypes ya creados por Typescript

interface Task {
    id: number;
    name: string;
    description: string;
}

// Partial<T> hace opcionales lo elementos de 1 interfaz sin necesidad de editar la interfaz

function updateTask(id: string, task: Partial<Task>) {
    // Logica de programación
    console.log();
}

const newTask = { name: "Benji" }
updateTask('1', newTask)

// Partial  Required<T>
interface ToDo {
    id?: number;
    name?: string;
}

const myTodo: Required<ToDo> = { id: 1, name: 'tsc' };

// Partial Records<Keys, Types> para la creación de objetos { key: value }
interface CatInfo {
    age: number;
    name: string;
}

type CatName = "moi" | "baris" | "laruso" | "peluso";

const cats: Record<CatName, CatInfo> = {
    moi: { age: 2, name: '' },
    baris: { age: 2, name: '' },
    laruso: { age: 2, name: '' },
    peluso: { age: 2, name: '' },
}

// Pick <T, Properties>
interface OtherToDo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<OtherToDo, 'title' | 'completed'>;

const algo: TodoPreview = {
    title: "",
    completed: true,
}

// Omit <T, Properties>
type TodoOmited = Omit<OtherToDo, 'description'>;
const todoOmited: TodoOmited = {
    title: "",
    completed: false,
}