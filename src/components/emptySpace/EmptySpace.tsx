import Picture from "@/assets/Picture";
import CustomButton from "../button/Button";
import CreateCohortModal from "../modal/CreateCohortModal";
import createCohortStyles from "../button/buttonStyles/CreateCohortStyles";
import { EmptySpaceStyle } from "@/assets/style/EmptySpaceStyle";
import React from "react";
import LearnersModal from "../modal/LearnersModal";

interface EmptySpaceProps {
  callToActionButtonText: string;
  callToActionText: string;
  handleOpen: () => void;
  clicked: boolean; 
  handleClose: () => void;
}

const EmptySpace: React.FC<EmptySpaceProps> = ({
  callToActionButtonText,
  callToActionText,
  handleOpen,
  clicked,
  handleClose,
}) => {
  return (
    <div className="pt-[200px] md:pt-10 w-[350px] pl-10 md:mt-5 md:ml-[250px]  flex flex-col justify-center items-center h-64 md:w-96 gap-5">
      <div className="h-48 w-96 flex flex-col justify-center items-center gap-10">
        <Picture url={"/Group 598.png"} style={EmptySpaceStyle} />
        <div className="font-bold">Empty Space</div>
      </div>
      <div className="break-all text-wrap text-center">{callToActionText}</div>
      <CustomButton
        icons={[]}
        text={callToActionButtonText}
        style={createCohortStyles}
        onClick={handleOpen}
        isDisabled={false}
      />
      <CreateCohortModal isClicked={clicked} closeModal={handleClose} />
      {/* <LearnersModal isClicked={clicked} closeModal={handleClose}/> */}
    </div>
  );
};

export default EmptySpace;
