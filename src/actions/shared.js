"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
function login(username) {
    return (dispatch) => {
        dispatch(user_1.setUser(username));
    };
}
exports.login = login;
;
