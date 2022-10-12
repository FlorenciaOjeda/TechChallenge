import { NextPage } from "next";
import { useEffect, useState } from "react";
import useModules from "../hooks/useModules";
import CommonButton from "./CommonButton";
import CommonLabel from "./CommonLabel";
import { useModule } from "../context/SelectedModuleContext";
import {
  ButtonsContainer,
  Container,
  LabelContainer,
  SecondContainer,
  SmallContainer,
  TitleLabel,
} from "../constants/ui/styles";
import ColourfullButton from "./ColourfullButton";
import {
  AUTH_MODULE,
  CONTENT_MODULE,
  CREATE_ICON,
  LIGTHBULB_ICON,
  SUBMIT_ICON,
  TRASH_ICON,
} from "../constants/strings/global";
import useModulesHandler from "../hooks/useModulesHandler";

const HomeContent: NextPage<any> = () => {
  // manage modules logic in a separate hook
  const { data } = useModules();
  //In order to avoid prop drilling, everything used by more than one component (state, functions, etc) is saved in a global context
  const {
    selectedModule,
    subModules,
    selectedSubModule,
    setSubModulesFun,
    setSelectedSubModuleFun,
  } = useModule();
  //Separated logic from the component to make it more clear
  const { index, handleClickAuth, handleClickContent, handleClickSubModule } =
    useModulesHandler();
  //manage users from selected submodule
  const [users, setUsers] = useState<string[]>();

  //When the page is first rendered, submodules are fetched. Also, the first one is set as selected by default
  useEffect(() => {
    setSubModulesFun(
      Object.keys(data ? (data.content_module ? data?.content_module : {}) : {})
    );
    setSelectedSubModuleFun(
      Object.keys(
        data ? (data.content_module ? data?.content_module : {}) : {}
      )[0]
    );
  }, []);

  //Whenever the selected submodule changes, the correspondant users are loaded
  useEffect(() => {
    if (data && selectedSubModule && data[selectedModule][selectedSubModule]) {
      let arr: string[] = Object.values(
        data[selectedModule][selectedSubModule]
      );
      setUsers(arr);
    }
  }, [selectedSubModule]);

  return (
    <>
      <Container>
        <SmallContainer>
          <CommonButton
            text="Content_module"
            handleClick={handleClickContent}
            selected={selectedModule === CONTENT_MODULE}
          ></CommonButton>
          <CommonButton
            text="Auth_module"
            handleClick={handleClickAuth}
            selected={selectedModule === AUTH_MODULE}
          ></CommonButton>
        </SmallContainer>

        <SecondContainer>
          <>
            <SmallContainer>
              {subModules?.map((subModule, index) => {
                return (
                  <CommonButton
                    text={`Module ${index + 1}`}
                    handleClick={() =>
                      handleClickSubModule(subModule, index + 1)
                    }
                    selected={selectedSubModule === subModule}
                    key={index}
                  ></CommonButton>
                );
              })}
            </SmallContainer>
            <TitleLabel>Number of users in Module {index}:</TitleLabel>
            <LabelContainer>
              {users?.map((user, index) => {
                return <CommonLabel key={index} text={user}></CommonLabel>;
              })}
            </LabelContainer>

            <ButtonsContainer>
              <ColourfullButton
                text="Delete"
                handleClick={() => console.log("Not Implemented")}
                background="#EB4646"
                color="white"
                iconIndex={TRASH_ICON}
              ></ColourfullButton>
              <ColourfullButton
                text={"Advice"}
                handleClick={() => console.log("Not Implemented")}
                background="#EAC975"
                color="white"
                iconIndex={LIGTHBULB_ICON}
              ></ColourfullButton>
              <ColourfullButton
                text={"Create"}
                handleClick={() => console.log("Not Implemented")}
                background="#FF989C"
                color="black"
                iconIndex={CREATE_ICON}
              ></ColourfullButton>
              <ColourfullButton
                text="Submit"
                handleClick={() => console.log("Not Implemented")}
                background="#76CEB9"
                color="white"
                iconIndex={SUBMIT_ICON}
              ></ColourfullButton>
            </ButtonsContainer>
          </>
        </SecondContainer>
      </Container>
    </>
  );
};

export default HomeContent;
