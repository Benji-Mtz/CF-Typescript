var DatabaseEntity;
(function (DatabaseEntity) {
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        return User;
    }());
    DatabaseEntity.User = User;
    var myUser = new User('Benji');
    // console.log(myUser);
})(DatabaseEntity || (DatabaseEntity = {}));
var myOtherUser = new DatabaseEntity.User("Benji 2");
console.log(myOtherUser);
/// <reference path="namespaces.ts" />
var myOtherUsr = new DatabaseEntity.User("Benji reference");
console.log(myOtherUsr);
