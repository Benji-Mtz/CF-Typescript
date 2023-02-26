let myAge: number = 30;
let myName: string = "Benji";
let isSenior: boolean = true;
let personita: Object = {};

let fruits : Object[] = [{}, { name: 'manzana'}];

let response: any = 'Hola';

function saludar1(): void{
    console.log("Hola");
}

let response2: unknown;

response2 = true;

let condicion = true ? response2: false;

let aunNoDefinido = undefined;
let valorNull = null;

// Type - tipo interface para simplificar tipo de variables
type ResponseTypeService = string | undefined;

let response3: ResponseTypeService;
response3?.toString();

let responseProducts: ResponseTypeService;
let responsePartners: ResponseTypeService;
responsePartners?.toString().concat("");

// Type Assertion o CAST

let message: any = "";
// let messageUppercase = (message as string).toUpperCase();
let messageUppercase = <string>message;
messageUppercase.toUpperCase();

// Pasamos getElementById('canvas') de HTMLElement a HTMLCanvasElement con el CAST
const canvas = <HTMLCanvasElement>document.getElementById('canvas');
canvas.style;
const canvas2 = document.getElementById('canvas') as HTMLCanvasElement;