export class User {
    name: String;
    email: String;
    password: String;
    confirmPassword: String;

    constructor(name?: String, email?: String, password?: String, confirmPassword?: String) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }

}
