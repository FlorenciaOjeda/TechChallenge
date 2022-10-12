"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataToRender = void 0;
class DataToRender {
    constructor() {
        this.data = { auth_module: {}, content_module: {} };
    }
    setAuth_module(key, arg) {
        this.data.auth_module[`${key}`] = arg;
    }
    setContent_module(key, arg) {
        this.data.content_module[`${key}`] = arg;
    }
}
exports.DataToRender = DataToRender;
