// import { PI, generateId } from "./utils.module";
// import { User as Person } from './utils.module';

import * as Utils from './utils.module';


const myNumber = 10 * Utils.PI;
const myUser: Utils.User = { id: Utils.generateId().toString(), name: 'Benji' };

console.log('====================================');
console.log({
    myNumber,
    myUser
});
console.log('====================================');