import React, { ChangeEvent, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import CustomButton from "../button/Button";
import CustomInput from "@/input/CustomInput";
import CohortNameStyle from "@/input/style/CohortNameInputStyle";
import CohortDescriptionStyle from "@/input/style/CohortDescriptionStyles";
import DateInputStyle from "@/input/style/DateInputStyle";
import { MdOutlineInfo } from "react-icons/md";
import createCohortStyles from "../button/buttonStyles/CreateCohortStyles";
import CancelButtonStyle from "../button/buttonStyles/cancelButtonStyle";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/Store";
import { createCohort } from "@/slice/CohortSlice";
import { CreateCohortApi } from "@/fetchData/CreateCohortApiFetch";
import { AllProgramsApi } from "@/fetchData/AllPrograms";
import ProgramSelection from "../programList/ProgramSelection";
import UploadImage from "../uploadImage/UploadImage";
import { CreateCohortModalStyle } from "./modalStyle/CreateCohortModalStyle";

interface CohortData {
  cohortName: string;
  description: string;
  program: string;
  imageUrl: string;
  startDate: Date;
  endDate: Date;
}

const LearnersModal: React.FC<{
  isClicked: boolean;
  closeModal: () => void;
}> = ({ isClicked, closeModal }) => {
  const dispatch = useDispatch<AppDispatch>();

  const allPrograms = useSelector((state: RootState) => state.progams.programs);

  const [cohortData, setCohortData] = useState<CohortData>({
    cohortName: "",
    description: "",
    program: "",
    imageUrl: "",
    startDate: new Date(),
    endDate: new Date(),
  });

  const reset = () => {
    setCohortData({
      cohortName: "",
      description: "",
      program: "",
      imageUrl: "",
      startDate: new Date(),
      endDate: new Date(),
    });
  };
  const handelCancelButton = () => {
    closeModal();
    reset();
  };
  useEffect(() => {
    dispatch(AllProgramsApi());
  }, []);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setCohortData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleButtonClick = () => {
    dispatch(createCohort(cohortData));
    dispatch(CreateCohortApi);
    closeModal();
    reset();
  };
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setCohortData((prev) => ({
          ...prev,
          imageUrl: result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();

    reader.onloadend = () => {
      const result = reader.result as string;
      setCohortData((prev) => ({
        ...prev,
        imageUrl: result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const validData = Object.values(cohortData).some((value) => value === "");

  return (
    <div>
      <Modal
        open={isClicked}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={CreateCohortModalStyle}>
          <div className="flex flex-row justify-between font-bold text-2xl">
            Add Learners
            <CustomButton
              text={""}
              icons={[<CloseIcon />]}
              onClick={closeModal}
              style={{ cursor: "pointer" }}
              isDisabled={false}
            />
          </div>
          <div className="flex flex-col h-[98%] w-[105%] gap-5 overflow-x-hidden ">
            <div className="flex flex-col gap-2  pt-2">
              Cohort Name
              <CustomInput
                type={"text"}
                placeHolder={"Ex.Cohorts"}
                style={CohortNameStyle}
                name="cohortName"
                value={cohortData.cohortName}
                onChange={handleInputChange}
                icon={undefined}
                accept={""}
                max={undefined}
                min={undefined}
              />
            </div>
            <div className="flex flex-col gap-2   pt-2">
              Description
              <CustomInput
                type={"text"}
                placeHolder={"Ex.A space for python developers"}
                style={CohortDescriptionStyle}
                value={cohortData.description}
                name="description"
                onChange={handleInputChange}
                icon={undefined}
                accept={""}
                max={undefined}
                min={undefined}
              />
            </div>

            <div className="flex flex-col gap-2  pt-2">
              Program
              <ProgramSelection
                onChange={handleInputChange}
                value={cohortData.program}
                programs={allPrograms}
              />
            </div>

            <div className="flex flex-row gap-5  pt-2">
              <div className="flex flex-col gap-2">
                Start Date
                <CustomInput
                  type={"date"}
                  onChange={handleInputChange}
                  value={cohortData.startDate}
                  name="startDate"
                  style={DateInputStyle}
                  min={new Date().toISOString().split("T")[0]}
                  max={new Date().toISOString().split("T")[1]}
                  icon={undefined}
                  placeHolder={""}
                  accept={""}
                />
              </div>
              <div className="flex flex-col gap-2">
                End Date
                <CustomInput
                  type={"date"}
                  onChange={handleInputChange}
                  name="endDate"
                  value={cohortData.endDate}
                  style={DateInputStyle}
                  min={new Date().toISOString().split("T")[0]}
                  max={new Date().toISOString().split("T")[1]}
                  icon={undefined}
                  placeHolder={""}
                  accept={""}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              Add a cohort Avatar
              <UploadImage
                handleDragOver={handleDragOver}
                handleDrop={handleDrop}
                cohortData={cohortData}
                handleImageUpload={handleImageUpload}
              />
            </div>

            <div className="flex  flex-row items-center gap-1">
              <MdOutlineInfo /> you can do this later
            </div>

            <div className="flex gap-3 justify-end mt-5">
              <CustomButton
                text={"Cancel"}
                style={CancelButtonStyle}
                onClick={handelCancelButton}
                icons={undefined}
                isDisabled={false}
              />
              <CustomButton
                text="Create Cohort"
                style={createCohortStyles}
                isDisabled={validData}
                onClick={handleButtonClick}
                icons={undefined}
              />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
export default LearnersModal;
