export class DataToRender {
    data: IDataModels = {auth_module:{},content_module:{}};

    setAuth_module(key: string, arg: string[]) {
        this.data.auth_module[`${key}`] = arg;
    }
    
    setContent_module(key: string, arg: string[]) {
        this.data.content_module[`${key}`] = arg;
    }
}

export interface IDataModels {
    auth_module: IDataSubModels;
    content_module: IDataSubModels;
}

export interface IDataSubModels {
    [n:string]:string[]
}