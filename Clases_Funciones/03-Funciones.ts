const sayHi = (name) => {
    console.log(`Hola ${name}`);
};

sayHi("Mundo cruel!");

function sayGoodBye(name: string) {
    console.log(`Adios a ${ name }`);
}

sayGoodBye('Pedrito');

interface IPayload {
    id: number;
    name: string;
    charge: string;
    number: number;
}


const Payload: IPayload = {
    id: 1,
    name: 'Benji',
    charge: 'Developer',
    number: 10
}

function show({ name, ...other }: IPayload): number {
    console.log("El nombre recibido es: ", name);
    console.log("Otros Datos: ", other);
    return 1;
}

const resShow = show(Payload);