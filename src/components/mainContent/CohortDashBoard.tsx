import CustomInput from "@/input/CustomInput";
import { LuSearch } from "react-icons/lu";
import Picture from "@/assets/Picture";
import CustomButton from "../button/Button";
import createCohortStyles from "../button/buttonStyles/CreateCohortStyles";
import CreateCohortModal from "../modal/CreateCohortModal";
import { HiOutlineDotsVertical } from "react-icons/hi";
import MoreActionButtonStyles from "../button/buttonStyles/MoreAction";
import CohortAvatarStyle from "@/assets/style/CohortAvatarStyle";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ViewAllCohortUrl } from "@/assets/urls/urls";
import { FiUser } from "react-icons/fi";

interface CohortDashBoardProps {
    handleOpen:any,
    clicked: boolean,
    handleClose: any,
}

interface CohortData {
    cohortName: string;
    program: string;
    startDate: string;
    CohortAvatarUrl: string;
}


const CohortDashBoard: React.FC<CohortDashBoardProps>  = ({ handleOpen, clicked,  handleClose }) => {

    const [cohortData, setCohortData] = useState<CohortData[]>([]);

//  const dispatch = useDispatch<AppDispatch>();



    const dataExists = typeof cohortData === 'object' && Object.values(cohortData).some(value => value !== null );

 useEffect( ()=>{
  const fetchCohort = async ()=>{
  try{
      const  token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJBRE1JTiJdLCJpc3MiOiJFbnVtIn0.aNaQX6099P1v9E67yUfxznob9bAQDWDWhEUCRgrgMKDxUMqZAEsYVIWJji3VwgrWaDrtQNNWpHjgpF8mgobEHg";
    const response = await axios.get(ViewAllCohortUrl, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    setCohortData(response.data)
    console.log('response ---->', response.data)
  }
  catch(e:any){
    console.log(e.error)
  }}
  fetchCohort()

 },[] )


    // @ts-ignore
    return (
    <>
   {/*{cohortData && cohortData.length > 0 ? (*/}
    <div className="w-[300px] md:w-full md:text-blue ">
      <div className="flex pt-5 gap-5 flex-col-reverse md:flex md:flex-row mt-5  md:justify-between  w-[100%]">
        <div className="flex md:w-[400px] sm:h-[12vh] md:h-[7vh] border  border-solid border-grey-100 gap-2 rounded-[7px] justify-start items-center pl-2 ">
          <LuSearch color={"#D0DCE4"} />
          <CustomInput placeHolder={"Search"} style={{ width: '360px' }}
          type={undefined} icon={undefined} value={undefined}
          accept={""}
          max={undefined}
          min={undefined}
          name={""} />
        </div>

        <div className="flex flex-row  gap-4">
          <CustomButton
                icons={[]}
                text={"Create a cohort"}
                style={createCohortStyles}
                onClick={handleOpen} isDisabled={false}        />
          <CustomButton
                icons={[<HiOutlineDotsVertical key="dots-icon"/>]}
                text={"More Actions"}
                style={MoreActionButtonStyles} isDisabled={false}       />
        </div>
      </div>

      <div className="flex flex-col mt-8 overflow-x-hidden w-3/4 md:w-[1070px] md:h-[215px] sm:h-[850px] ">

          <div>
            {cohortData.map((item, index) => (

              <div key={index} className="flex flex-row shadow-inner justify-between mb-5 p-2 h-[70px] items-center
              w-[1020px] border-[#F6FCF] rounded-lg ">
              <div className="flex gap-3 justify-center items-center">
                <div className="flex justify-center items-center">
                  <Picture url={item.CohortAvatarUrl} style={CohortAvatarStyle} />
                </div>

                <div className="flex flex-col gap-2 ">
                <div className="font-#1E323F font-semibold font-sans">{item.cohortName}</div>
                {/* <div >{item.program}</div> */}

                <div className="flex items-center">
                <span className="">{item.program ? item.program : "Program"}</span>
                <FiUser className="w-4 h-4 text-gray-300 ml-7"/>
                <span className="font-#475661 text-sm pt-0.5 ml-2">25 Learners</span>
                </div>

                {/* <div className="grid grid-cols-2 gap-10"><span className="">{item.program ? item.program : "program"} </span> <FiUser className="w-4 h-4 text-gray-300" /></div> */}
                </div>
                </div>
                <div className="flex justify-center items-center gap-8 pr-7 font-dm sans">
                <div className="flex items-center gap-2 text-sm">
                <div>Created</div>
                <div>{item.startDate}</div>
                </div>
                <HiOutlineDotsVertical />
              </div>
              </div>
            ))}
          </div>
      </div>

      <CreateCohortModal isClicked={clicked} closeModal={handleClose} />
    </div>
    {/*):(*/}
    {/*  <EmptySpace callToActionButtonText={"create cohort"} callToActionText={"click me"} handleOpen={function (): void {*/}
    {/*        throw new Error("Function not implemented.");*/}
    {/*      } } clicked={false} handleClose={function (): void {*/}
    {/*        throw new Error("Function not implemented.");*/}
    {/*      } }/>*/}
    {/*)}*/}
    </>
  );
};

export default CohortDashBoard;