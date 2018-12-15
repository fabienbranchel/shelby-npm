"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SET_USER = 'SET_USER';
function setUser(user) {
    return {
        type: exports.SET_USER,
        user
    };
}
exports.setUser = setUser;
