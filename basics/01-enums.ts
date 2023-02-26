// enum - enumera desde el 0 hasta n o como se sobreescriba
enum Users {
    normalUser = "UNO",
    payedUser = "TRES",
    adminUser = "CINCO",
    megaUser = "SIETE",
}

const myUser = Users.adminUser;
if (myUser === Users.adminUser) {
    // Has algo
    console.log(myUser);
}

