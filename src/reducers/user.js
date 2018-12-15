"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../actions/user");
function authedUser(state = null, action) {
    switch (action.type) {
        case user_1.SET_USER:
            return action.user;
        default:
            return state;
    }
}
exports.default = authedUser;
