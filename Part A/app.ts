import { Data } from "./interfaces/data";
import { DataToRender } from "./interfaces/dataToRender";
import fs from "fs";
import path from "path";

let newData: DataToRender = new DataToRender();
for(let i=0; i<20; i++) {
    //I use readFileSync instead of readFile because it allowes to set the encoding. readFile returns a Buffer
    let rawData = fs.readFileSync(`./data/u${i}.json`, "utf8");
    //With utf8 data comes as string, so I parse it to JSON
    let current: Data = JSON.parse(rawData);
    let authModuleName = current.provider.auth_module;
    let contentModuleName = current.provider.content_module;
    //Get filename
    let user = path.basename(`./data/u${i}.json`);
    
    //Check if the name of the auth module used by current user is already on the object I am creating to return
    if (!(authModuleName in newData.data.auth_module)) {
      //if it is not, then I add it with a list with the file using the module
      newData.setAuth_module(authModuleName, [user]);
    } else {
      //if it is, I just add the user to the list
      let value = newData.data.auth_module[authModuleName];
      value.push(user);
      newData.setAuth_module(authModuleName, value);
    }
    
    //Check if the name of the content module used by current user is already on the object I am creating to return
    if (!(contentModuleName in newData.data.content_module)) {
      //if it is not, then I add it with a list with the file using the module
      newData.setContent_module(contentModuleName, [user]);
    } else {
      //if it is, I just add the user to the list
      let value = newData.data.content_module[contentModuleName];
      value.push(user);
      newData.setContent_module(contentModuleName, value);
    }
}

console.log(newData.data);
