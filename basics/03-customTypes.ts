type Persona = {
    name: string;
    code: string | number;
    description?: string;
};

const newPerson: Persona = {
    code: "H",
    name: "Benji"
};

// UnionType
type ServiceResponse = string | number | null | undefined;
let responseUnionType: ServiceResponse;

// customType
type UserCharges = "admin" | "owner" | "dev";
const myUserType: UserCharges = 'admin';