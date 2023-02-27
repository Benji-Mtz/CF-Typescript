var myValue = {
    field: '5'
};
var myValue2 = {
    field: {
        id: 132,
        name: 'Benji'
    }
};
var MyClass = /** @class */ (function () {
    function MyClass(field) {
        this.field = field;
    }
    return MyClass;
}());
var myObjetc = new MyClass(10);
function getData(id) { }
getData('Hola');
var HttpResponse = /** @class */ (function () {
    function HttpResponse(data, status, code) {
        this.data = data;
        this.status = status;
        this.code = code;
    }
    return HttpResponse;
}());
var fetchUser = function () {
    return {
        id: 1,
        name: "Benji"
    };
};
var myUSer = fetchUser();
var res = new HttpResponse(myUSer, 200, 1);
console.log(res); // HttpResponse { data: { id: 1, name: 'Benji' }, status: 200, code: 1 }
var CRUD = /** @class */ (function () {
    function CRUD(items) {
        this.items = items;
    }
    CRUD.prototype.addItem = function (item) {
        this.items.push(item);
    };
    CRUD.prototype.removeLastItem = function () {
        this.items.pop();
    };
    CRUD.prototype.printItems = function () {
        return this.items;
    };
    return CRUD;
}());
var users = [
    { id: 1, name: 'Benji' },
    { id: 2, name: 'Benji2' },
    { id: 3, name: 'Benji3' },
];
var userCRUD = new CRUD(users);
userCRUD.addItem({ id: 4, name: 'Benji4' });
console.log(userCRUD.printItems());
