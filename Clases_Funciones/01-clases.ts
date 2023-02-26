// npm run start:clases

class Animal {
    public name: "Generic animal";
    // Private es solo accesible en la definicion de la clase misma
    private age = 10;
    // Pero Protected solo la clase misma y las que extienden, pero no en la instancia como public
    protected identity = "secret";

    // Construye el objeto
    constructor(){}

    sayHi() {
        console.log("GRrrr", this.age);
    }
}

class Dog extends Animal {
    type: "Pastor Alemán";

    constructor(){
        // super es necesario porque hereda de una clase madre
        super();

    }

    sayHi() {
        console.log("Guau guau", this.identity);
    }
}

const Myanimal: Animal = new Animal();
Myanimal.sayHi();

const myDog: Dog = new Dog();
myDog.sayHi();