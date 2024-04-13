import React, { useState } from "react";
import CohortDashBoard from "./CohortDashBoard";
import EmptySpace from "../emptySpace/EmptySpace";
import { useSelector } from "react-redux";
import { RootState } from "@/store/Store";

interface mainComponent {
  content: any
}

const MainContent: React.FC<mainComponent>  = ({ content }) => {
  const [isCohortClicked, setIsCohortClicked] = useState(false);
  const [isProgramClicked, setIsProgramClicked] = useState(false);
  const [isInstructorClicked, setIsInstructorClicked] = useState(false);
  const [isLearnerClicked, setIsLearnerClicked] = useState(false);

  const handleClose = () => {
    setIsCohortClicked(false);
    setIsProgramClicked(false);
    setIsInstructorClicked(false);
    setIsLearnerClicked(false);
  };

  const cohortData = useSelector((state: RootState) => state.cohortData.cohortData);
  
  // @ts-ignore
  const dataExists = typeof cohortData === 'object' && Object.values(cohortData).some(value => value !== null && value !== "");

  
  const getModalOpeningFunction = (contentType: string) => {
    switch (contentType) {
      case "Cohorts":
        return () => setIsCohortClicked(true);
      case "Programs":
        return () => setIsProgramClicked(true);
      case "Instructors":
        return () => setIsInstructorClicked(true);
      case "Learners":
        return () => setIsLearnerClicked(true);
      default:
        return () => setIsCohortClicked(true); 
    }
  };

  return (
    <div className= "w-62 justify-center items-center  md:w-9/12 h-[325px] md:pt-3 md:bottom-[55px] md:left-56">
      <div className=" text-xl font-bold font- #1E323F font- IBM Plex serif w-[90px] h-[31px] hidden md:block pt-5">{content}</div>
      {content === "Cohorts"  ? (
        <CohortDashBoard
          clicked={isCohortClicked}
          handleOpen={getModalOpeningFunction(content)}
          handleClose={handleClose}
        />
      ) : (
        <EmptySpace
        callToActionText={
          content === "Cohorts"
            ? "No Cohort has been created yet. Let's get you clicking the button below"
            : content === "Programs"
            ? "No Program has been created yet. Let's get you started by clicking the button below"
            : content === "Instructors"
            ? "No Instructors has been invited, Let's get you started by clicking the button below"
            : content === "Learners"
            ? "No Learner has been added, Let's get you started by clicking the button below"
            : ""
        }
        callToActionButtonText={
          content === "Cohorts"
            ? "Create a Cohort"
            : content === "Programs"
            ? "Add Program"
            : content === "Instructors"
            ? "Invite Instructors"
            : content === "Learners"
            ? "Add learners"
            : ""
        }
        handleOpen={
          content === "Cohorts" ? getModalOpeningFunction(content) : () => {}
        }
        handleClose={handleClose}
        clicked={
       
          content === "Cohorts"
            ? isCohortClicked
            : content === "Programs"
            ? isProgramClicked
            : content === "Instructors"
            ? isInstructorClicked
            : content === "Learners"
            ? isLearnerClicked
            : false 
        }
      />
      
      )}
    </div>
  );
};

export default MainContent;