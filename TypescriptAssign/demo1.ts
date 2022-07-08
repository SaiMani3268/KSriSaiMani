import { User, UserBuilder } from "./builder";

export function show() : void {
 var u: User = new UserBuilder("Admin")
    .setAge(26)
    .setPhone("0123456789")
    .setAddress("india")
    .build();
 console.log(u.Name + " " + u.Age + " " + u.Phone + " " + u.Address);
}

show();
