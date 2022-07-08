import { User, UserBuilder } from "./builder";

export function show() : void {
 var u: User = new UserBuilder("Admin")
    .setAge(66)
    .setPhone("9546672168")
    .setAddress("INDIA")
    .build();
 console.log(u.Name + " " + u.Age + " " + u.Phone + " " + u.Address);
}

show();
