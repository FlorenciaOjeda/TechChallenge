import { NextPage } from "next";
import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import { RiLightbulbLine } from "react-icons/ri";
import { MdArrowForwardIos } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";

const icons = [
  BsTrash,
  RiLightbulbLine,
  AiOutlinePlusCircle,
  MdArrowForwardIos,
];

interface Props {
  text: string;
  handleClick: () => void;
  background: string;
  color: string;
  iconIndex: number;
}

const CommonButton: NextPage<Props> = ({
  text,
  handleClick,
  background,
  color,
  iconIndex,
}: Props) => {
  //I didn't use the CommonButton component because although it could have been done, it would haver resulted in too many optional props
  //in order to check if an icon (an which one) was needed, ore if it had the "selected" property or not, the backgroung colour, the hover, etc.
  //Although they are similar, it would be too mucho logic to use just one and I prefer components not to be messy to use.

  //This is the Icon component which is rendered on the button. In order to do it reusable each time the component is called, it sends a constant that represents the index as as a prop.
  const Icon = icons[iconIndex];

  //Can't extract this styled component to the styles file because it uses the components props
  const Button = styled.button`
    background-color: ${(props) => background};
    color: ${(props) => color};
    padding: 5px 15px;
    width: 16%;
    height: 33px;
    border-radius: 10px;
    border: none;
    outline: 0;
    margin: 15px 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    &:hover {
      background-color: white;
      cursor: pointer;
      color: ${(props) => background};
    }

    @media (max-width: 1590px) {
      width: 25%;
    }
  `;

  const style = { fill: "white", fontSize: "1.7.em", background: "none" };
  const styleCreate = {
    fill: "black",
    fontSize: "1.5.em",
    background: "none",
  };

  //When icon index is 2, it means it is the "create" button, so the icon has to be rendered before the text
  return (
    <>
      <Button onClick={handleClick}>
        {iconIndex == 2 && <Icon style={styleCreate} />}
        {text} {iconIndex != 2 && <Icon style={style} />}
      </Button>
    </>
  );
};

export default CommonButton;
