import { useState } from "react";
import { useModule } from "../context/SelectedModuleContext";
import { AUTH_MODULE, CONTENT_MODULE } from "../constants/strings/global";
import useModules from "./useModules";

interface UseModulesHandler {
    index: number,
    handleClickAuth: () => void,
    handleClickContent: () => void,
    handleClickSubModule: (module: string, index: number) => void
}

const useModulesHandler = (): UseModulesHandler => {
  // manage modules logic in a separate hook
  const { data } = useModules();
  const { setSelectedModule, setSubModulesFun, setSelectedSubModuleFun } = useModule();
  //Created this state to properly render the module index
  const [index, setIndex] = useState<number>(1);  

  const handleClickAuth = () => {
    setSelectedModule(AUTH_MODULE);
    setSubModulesFun(
      Object.keys(data ? (data.auth_module ? data?.auth_module : {}) : {})
    );
    //The first module is set as selected by default when auth module is clicked
    setSelectedSubModuleFun(
      Object.keys(data ? (data.auth_module ? data?.auth_module : {}) : {})[0]
    );
  };

  const handleClickContent = () => {
    setSelectedModule(CONTENT_MODULE);
    setSubModulesFun(
      Object.keys(data ? (data.content_module ? data?.content_module : {}) : {})
    );
    //The first module is set as selected by default when content module is clicked
    setSelectedSubModuleFun(
      Object.keys(
        data ? (data.content_module ? data?.content_module : {}) : {}
      )[0]
    );
  };

  const handleClickSubModule = (module: string, index: number) => {
    setSelectedSubModuleFun(module);
    setIndex(index);
  };

  return {
    index,
    handleClickAuth,
    handleClickContent,
    handleClickSubModule
  };
};

export default useModulesHandler;
