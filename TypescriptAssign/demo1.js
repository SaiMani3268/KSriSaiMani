"use strict";
exports.__esModule = true;
exports.show = void 0;
var builder_1 = require("./builder");
function show() {
    var u = new builder_1.UserBuilder("Admin")
        .setAge(26)
        .setPhone("0123456789")
        .setAddress("india")
        .build();
    console.log(u.Name + " " + u.Age + " " + u.Phone + " " + u.Address);
}
exports.show = show;
show();
