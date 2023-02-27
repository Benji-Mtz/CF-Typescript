// Datos de tipo generico que asume el tipo d evariable que se pase por T en tiempo de ejecución
interface MyInterface<T> {
    field: T;
}
const myValue: MyInterface<string | number> = {
    field: '5',
}

interface Example { 
    id: number;
    name: string;
}

const myValue2: MyInterface<Example> = {
    field: {
        id: 132,
        name: 'Benji',
    }
}

class MyClass<T> {
    field: T;

    constructor(field: T){
        this.field = field;
    }
}

const myObjetc: MyClass<number> = new MyClass(10);

function getData<T>(id: string): Promise<T> | void {}
getData('Hola')

// Example with Clases
interface UserResponse {
    id: number;
    name: string;
}

class HttpResponse<T> {
    data: T;
    status: number;
    code: number;
    constructor(data: T, status: number, code: number) {
        this.data = data;
        this.status = status;
        this.code = code;
    }
}

const fetchUser = (): UserResponse => {
    return {
        id:1,
        name: "Benji",
    };
}

const myUSer = fetchUser();
const res = new HttpResponse(myUSer, 200, 1);
console.log(res); // HttpResponse { data: { id: 1, name: 'Benji' }, status: 200, code: 1 }

class CRUD<T> {
    constructor(private items: T[]) {}
    
    addItem(item: T) {
        this.items.push(item);
    }
    removeLastItem() {
        this.items.pop();
    }
    printItems(): T[] {
        return this.items;
    }
}

const users: UserResponse[] = [
    {id: 1, name: 'Benji'},
    {id: 2, name: 'Benji2'},
    {id: 3, name: 'Benji3'},
];

const userCRUD: CRUD<UserResponse> = new CRUD(users);
userCRUD.addItem({id: 4, name: 'Benji4'});
console.log(userCRUD.printItems());
