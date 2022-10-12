import { useEffect, useMemo, useState } from "react";
import { Data } from "../interfaces/data";
import items from "../../public/exports-files";
import { DataToRender, IDataModels } from "../interfaces/dataToRender";

interface UseModules {
  data?: IDataModels;
}

const useModules = (): UseModules => {
  const [modules, setModules] = useState<IDataModels>();
  // I use useMemo in order not to make an expensive calculation many times when the input hasn't changed. It is more efficient since the
  //items don't change in execution time
  //items is an array of the imported json files
  const calculation = useMemo(() => createJSONStructure(items), [items]);

  useEffect(() => {
    calculation;
  }, []);

  function createJSONStructure(data: Data[]) {
    let newData: DataToRender = new DataToRender();
    //Map through each user
    data.map((d) => {
      let authModuleName = d.provider.auth_module;
      let contentModuleName = d.provider.content_module;
      let user = d.name;

      //Check if the name of the auth module used by current user is already on the object I am creating to return
      if (!(authModuleName in newData.data.auth_module)) {
        //if it is not, then I add it with a list with the current user
        newData.setAuth_module(authModuleName, [user]);
      } else {
        //if it is, I just add the user to the list
        let value = newData.data.auth_module[authModuleName];
        value.push(user);
        newData.setAuth_module(authModuleName, value);
      }

      //Check if the name of the content module used by current user is already on the object I am creating to return
      if (!(contentModuleName in newData.data.content_module)) {
        //if it is not, then I add it with a list with the current user
        newData.setContent_module(contentModuleName, [user]);
      } else {
        //if it is, I just add the user to the list
        let value = newData.data.content_module[contentModuleName];
        value.push(user);
        newData.setContent_module(contentModuleName, value);
      }
    });
    setModules(newData.data);
  }

  return {
    data: modules,
  };
};

export default useModules;
