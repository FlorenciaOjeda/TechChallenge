"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dataToRender_1 = require("./interfaces/dataToRender");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
let newData = new dataToRender_1.DataToRender();
for (let i = 0; i < 20; i++) {
    let rawData = fs_1.default.readFileSync(`./data/u${i}.json`, "utf8");
    let current = JSON.parse(rawData);
    let authModuleName = current.provider.auth_module;
    let contentModuleName = current.provider.content_module;
    let user = path_1.default.basename(`./data/u${i}.json`);
    //Check if the name of the auth module used by current user is already on the object I am creating to return
    if (!(authModuleName in newData.data.auth_module)) {
        //if it is not, then I add it with a list with the file using the module
        newData.setAuth_module(authModuleName, [user]);
    }
    else {
        //if it is, I just add the user to the list
        let value = newData.data.auth_module[authModuleName];
        value.push(user);
        newData.setAuth_module(authModuleName, value);
    }
    //Check if the name of the content module used by current user is already on the object I am creating to return
    if (!(contentModuleName in newData.data.content_module)) {
        //if it is not, then I add it with a list with the file using the module
        newData.setContent_module(contentModuleName, [user]);
    }
    else {
        //if it is, I just add the user to the list
        let value = newData.data.content_module[contentModuleName];
        value.push(user);
        newData.setContent_module(contentModuleName, value);
    }
}
console.log(newData.data);
