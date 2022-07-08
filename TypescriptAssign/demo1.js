"use strict";
exports.__esModule = true;
exports.show = void 0;
var builder_1 = require("./builder");
function show() {
    var u = new builder_1.UserBuilder("Admin")
        .setAge(66)
        .setPhone("9546672168")
        .setAddress("INDIA")
        .build();
    console.log(u.Name + " " + u.Age + " " + u.Phone + " " + u.Address);
}
exports.show = show;
show();
