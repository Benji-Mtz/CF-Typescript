// Interface tipa el tipo de objetos
interface Person {
    name: string;
    code: number | string;
    charge: number;
    // puede ir o no description por el signo ?
    description?: string;
    sayHello: () => string;
    sayGoodBye?: () => string;
}

let person: Person = {
    name: 'Benji',
    code: '01',
    charge: 1,
    description: "Dev",
    sayHello: () => 'Hola',
    sayGoodBye: () => 'Adios',
}

person.code = '50';

let secondPerson: Person = {
    name: "",
    code: "",
    charge: 0,
    sayHello: () => 'Hola 2',
};

secondPerson.description?.toUpperCase();