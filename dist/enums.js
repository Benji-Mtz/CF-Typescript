// enum - enumera desde el 0 hasta n o como se sobreescriba
var Users;
(function (Users) {
    Users["normalUser"] = "UNO";
    Users["payedUser"] = "TRES";
    Users["adminUser"] = "CINCO";
    Users["megaUser"] = "SIETE";
})(Users || (Users = {}));
var myUser = Users.adminUser;
if (myUser === Users.adminUser) {
    // Has algo
    console.log(myUser);
}
