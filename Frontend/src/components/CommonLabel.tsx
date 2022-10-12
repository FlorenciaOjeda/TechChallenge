import { NextPage } from "next";
import { Label } from "../constants/ui/styles";
interface Props {
  text: string;
}

const CommonLabel: NextPage<Props> = (props: Props) => {
  return (
    <>
      <Label>{props.text}</Label>
    </>
  );
};

export default CommonLabel;
