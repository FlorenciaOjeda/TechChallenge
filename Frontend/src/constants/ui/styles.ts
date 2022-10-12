import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  height: auto;
  border-radius: 10px;
  border-style: solid;
  border-color: black;
  border-width: 1px;
  width: 50%;
  z-index: 4;
  margin-top: 3%;
`;

export const SecondContainer = styled.div`
  margin: 0 auto;
  margin: 30px;
  height: auto;
  border-radius: 10px;
  border-style: solid;
  border-color: black;
  border-width: 1px;
  width: auto;
  z-index: 4;
  margin-top: 3%;
`;

export const SmallContainer = styled.div`
  background-color: #b3b3b3;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-style: 2px solid;
  width: auto;
  height: 50px;
  display: flex;
  column-gap: 15px;
  padding-left: 15px;
`;

export const LabelContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 40%;
  padding-top: 5px;
  margin-bottom: 5%;
`;

export const TitleLabel = styled.div`
  width: 100%;
  margin: 15px 20px;
  font-weight: bolder;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-left: 35%;

  @media (max-width: 1100px) {
    padding-left: 2%;
    padding-right: 2%;
    flex-frow: 1;
  }
`;

export const Label = styled.label`
  background-color: #895c93;
  width: 90px;
  height: 40px;
  color: white;
  line-height: 40px;
  border-radius: 10px;
  outline: 0;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  text-align: center;
  transition: ease background-color 250ms;
`;
