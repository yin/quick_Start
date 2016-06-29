class Student {
    fullName: string;
    constructor(public firstName, public lastName, public middleName) {
	this.fullName = firstName + ' ' + middleName + ' ' + lastName
    }
}

interface Person {
    firstName : string,
    lastName  : string
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName + "!"
}

var user = new Student("Matej", "Gagyi", "'Yin'")

document.body.innerHTML = greeter(user)
