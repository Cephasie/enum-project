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
import { CreateCohortApi } from "@/fetchData/CreateCohortApiFetch";
import { AllProgramsApi } from "@/fetchData/AllPrograms";
import ProgramSelection from "../programList/ProgramSelection";
import UploadImage from "../uploadImage/UploadImage";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


interface CohortData {
  cohortName: string;
  description: string;
  program: string;
  imageUrl: string;
  startDate: Date;
  endDate: Date;
}

const CreateCohortModal: React.FC<{
  isClicked: boolean;
  closeModal: () => void;
}> = ({ isClicked, closeModal }) => {
  const dispatch = useDispatch<AppDispatch>();

  const allPrograms = useSelector((state: RootState) => state.programs.programs);

  const [cohortData, setCohortData] = useState<CohortData>({
    cohortName: "",
    description: "",
    startDate: new Date(),
    endDate: new Date(),
    program: "",
    imageUrl: "",
  
  });

  const [imageFile, setImageFile] = useState(null);

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

  
  const formatDate = (dateString: string | number | Date) => {
      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
  };

  const formattedStartDate = formatDate(cohortData.startDate);
  const formattedEndDate = formatDate(cohortData.endDate);


  const updatedCohortData = {
    ...cohortData,
    startDate: formattedStartDate,
    endDate: formattedEndDate
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
    const formData = new FormData();
    formData.append("cohortName", cohortData.cohortName);
    formData.append("description", cohortData.description);
    formData.append("program", cohortData.program);
    formData.append("file", imageFile);
    formData.append("startDate", cohortData.startDate.toString());
    formData.append("endDate", cohortData.endDate.toString());
    dispatch(CreateCohortApi(formData));
    // dispatch(createCohort(cohortData));
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
      setImageFile(file);
    };

    reader.readAsDataURL(file);
  };

  const validData = Object.values(cohortData).some((value) => value === "");

const CreateCohortModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "35%",
  height: "97%",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

 const SmallScreenModalStyle = {
  position: "absolute",
  top: "60%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%", 
  height: "60%", 
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};



 
  const theme = useTheme();


  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div>
      <Modal
        open={isClicked}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={isSmallScreen ? SmallScreenModalStyle : CreateCohortModalStyle}>
          <div className="flex flex-row justify-between font-bold text-2xl">
            Create a Cohort
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
                placeHolder={"alpha cohort"}
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
                placeHolder={"alpha cohort is the first cohort..."}
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
export default CreateCohortModal;