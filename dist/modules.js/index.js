"use strict";
// import { PI, generateId } from "./utils.module";
// import { User as Person } from './utils.module';
exports.__esModule = true;
var Utils = require("./utils.module");
var myNumber = 10 * Utils.PI;
var myUser = { id: Utils.generateId().toString(), name: 'Benji' };
console.log('====================================');
console.log({
    myNumber: myNumber,
    myUser: myUser
});
console.log('====================================');
