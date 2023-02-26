interface PersonCustom {
    name: string;
    age: number;
}

// Interfaces extienden los valores de otra interface
interface Employee extends PersonCustom {
    charge: string;
}

const myEmployee: Employee = {
    name: "",
    age: 40,
    charge: "Dev",
}

type User = {
    id: string;
};

// UnionTypes solo en Types
type Admin = User & Employee;

const myAdmin: Admin ={
    name: "",
    age: 40,
    charge: "Dev",
    id: "ABC"
}

// Sobreescritura de interfaces para no modificar interfaces
// Interfaz original
interface Developer {
    name: string;
    stack: string[];
}

// Interfaz con otros datos
interface Developer {
    phone: number;
}

// Interfaz de composición
const me: Developer = {
    name: "Benji",
    stack: ["Go", "Js"],
    phone: 1234
}
