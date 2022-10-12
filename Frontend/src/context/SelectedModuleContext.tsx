import React, { ReactNode, useContext, useState } from "react";
import { CONTENT_MODULE } from "../constants/strings/global";
import useModules from "../hooks/useModules";

type moduleType = {
  selectedModule: "auth_module" | "content_module";
  selectedSubModule?: string;
  subModules?: string[];
  setSelectedModule: (module: "auth_module" | "content_module") => void;
  setSubModulesFun: (subModules: string[]) => void;
  setSelectedSubModuleFun: (subModule: string) => void;
};

const moduleTypeDefaultValues: moduleType = {
  selectedModule: CONTENT_MODULE,
  selectedSubModule: "",
  subModules: [],
  setSelectedModule: (module: string) => {},
  setSubModulesFun: (subModules: string[]) => {},
  setSelectedSubModuleFun: (subModule: string) => {},
};

const ModuleContext = React.createContext<moduleType>(moduleTypeDefaultValues);

export const useModule = () => useContext(ModuleContext);

type Props = {
  children: ReactNode;
};

//Used context API because other libraries such as Redux or Zustand introduced a big complexity in logic for a small proyect

export function ModuleProvider({ children }: Props) {
  const { data } = useModules();
  //Manage selected module in order to properly render submodules
  const [selectedModule, setSelected] = useState<
    "auth_module" | "content_module"
  >(CONTENT_MODULE);
  const [subModules, setSubModules] = useState<string[]>();
  //Manage selected submodule in order to properly render users and set button as selected
  const [selectedSubModule, setSelectedSubModule] = useState<string>(
    data ? Object.keys(data[selectedModule])[0] : ""
  );

  const setSelectedModule = (module: "auth_module" | "content_module") => {
    setSelected(module);
  };

  const setSubModulesFun = (subModules: string[]) => {
    setSubModules(subModules);
  };

  const setSelectedSubModuleFun = (subModule: string) => {
    setSelectedSubModule(subModule);
  };

  const value = {
    selectedModule,
    selectedSubModule,
    subModules,
    setSelectedModule,
    setSubModulesFun,
    setSelectedSubModuleFun,
  };

  return (
    <>
      <ModuleContext.Provider value={value}>{children}</ModuleContext.Provider>
    </>
  );
}
