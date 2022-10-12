import { NextPage } from "next";
import styled from "styled-components";

interface Props {
  text: string;
  handleClick: () => void;
  selected?: boolean;
}

const CommonButton: NextPage<Props> = ({
  text,
  handleClick,
  selected,
}: Props) => {
  //Can't extract this styled component to the styles file because it uses the components props
  const Button = styled.button`
    background-color: ${(props) => (selected ? "#48416E" : "#895C93")};
    color: white;
    padding: 5px 15px;
    border-radius: 10px;
    border: none;
    outline: 0;
    margin: 10px 0px;
    cursor: pointer;
    box-shadow: 0px 5px 5px gray;
    transition: ease background-color 250ms;
    &:hover {
      background-color: #48416e;
    }
  `;

  return (
    <>
      <Button onClick={handleClick}>{text}</Button>
    </>
  );
};

export default CommonButton;
