// Dice que tiene pero no como se hace
interface IPerson {
    name: string;
    code: number | string;
    charge: number;
    description?: string;
    token?: string;
    sayHello: () => string;
    sayGoodBye?: () => string;
}

// Fabrica clases
class CPerson {
    sayHello(){
        console.log("Hola");
    }
}

interface IPet {
    sayHello: () => string;
}

class CPet {
    sayHello() {
        return "Hola";
    }
}

// Implements obliga a cumplir la estructura o contrato
class Dogdy implements IPet {
    sayHello() {
        return "Hola desde la implementación de IPet";
    }
}

// Extends no obliga solo se trae todos los atributos y metodos de la clase madre
class Cat extends CPet {}