namespace DatabaseEntity {
    export class User {
        constructor(public name: string) {}
    }

    const myUser = new User('Benji');
    // console.log(myUser);
}
const myOtherUser = new DatabaseEntity.User("Benji 2");
console.log(myOtherUser);