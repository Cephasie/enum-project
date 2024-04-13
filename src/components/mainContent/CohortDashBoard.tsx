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
import style from './CohortDashBoardStyle.module.css'

interface CohortDashBoardProps {
  handleOpen: any;
  clicked: boolean;
  handleClose: any;
}

interface CohortData {
  cohortName: string;
  programs: [
    {
      id: number;
      programName: string;
    }
  ];
  startDate: string;
  avatarImageUrl: string;
}

const CohortDashBoard: React.FC<CohortDashBoardProps> = ({
  handleOpen,
  clicked,
  handleClose,
}) => {
  const [cohortData, setCohortData] = useState<CohortData[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [screenHeight, setScreenHeight] = useState<number | undefined>(
    undefined
  );
  const [screenWidth, setScreenWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenHeight(window.innerHeight);
      setScreenWidth(window.innerWidth);

      const handleResize = () => {
        setScreenHeight(window.innerHeight);
        setScreenWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const dataExists =
    typeof cohortData === "object" &&
    Object.values(cohortData).some((value) => value !== null);

  useEffect(() => {
    const fetchCohort = async () => {
      try {
        const token =
          "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJBRE1JTiJdLCJpc3MiOiJFbnVtIn0.aNaQX6099P1v9E67yUfxznob9bAQDWDWhEUCRgrgMKDxUMqZAEsYVIWJji3VwgrWaDrtQNNWpHjgpF8mgobEHg";
        const response = await axios.get(ViewAllCohortUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCohortData(response.data);
        console.log("response ---->", response.data);
      } catch (e: any) {
        console.log(e.error);
      }
    };
    fetchCohort();
  }, []);

  const filteredCohorts = cohortData.filter((cohort) =>
    cohort.cohortName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="w-[300px] md:w-full md:text-blue">
        <div className="flex pt-5 gap-5 flex-col-reverse md:flex md:flex-row mt-5 md:justify-between w-[100%]">
          <div className="flex md:w-[400px] sm:h-[12vh] md:h-[7vh] border border-solid border-gray-100 gap-2 rounded-[7px] justify-start items-center pl-2">
            <LuSearch color={"#D0DCE4"} />
            <input
              placeholder="Search"
              style={{
                width: "360px",
                border: "none",
                outline: "none",
                boxShadow: "none",
              }}
              type="text"
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchQuery(e.target.value)
              }
            />
          </div>

          <div className="flex flex-row gap-4">
            <CustomButton
              icons={[]}
              text={"Create a cohort"}
              style={createCohortStyles}
              onClick={handleOpen}
              isDisabled={false}
            />
            <CustomButton
              icons={[<HiOutlineDotsVertical key="dots-icon" />]}
              text={"More Actions"}
              style={MoreActionButtonStyles}
              isDisabled={false}
            />
          </div>
        </div>
        <div
          className={`flex flex-col overflow-x-hidden mt-8 md:w-full md:max-w-[100%] md:h-56 ${style.cohortList} sm:h-full`}          
        >
          {filteredCohorts.length > 0 ? (
            filteredCohorts.map((item, index) => (
              <div
                key={index}
                className="flex flex-row shadow-inner justify-between mb-5 p-2 h-[70px] items-center md:w-full md:max-w-[100%] border-[#F6FCF] rounded-lg "
              >
                <div className="flex gap-3 items-center">
                  <div className="flex justify-center items-center">
                    <Picture
                      url={item.avatarImageUrl}
                      style={CohortAvatarStyle}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <div className="font-DM Sans text-sm font-semibold">{item.cohortName}</div>
                    <div className="flex items-center gap-2">
                      <div className="flex flex-wrap w-60">
                        {item.programs.map((program, itemIndex) => (
                          <span
                            key={itemIndex}
                            className="font-sm text-sm text-gray-800 py-1 rounded-md"
                          >
                            {program.programName}
                          </span>
                        ))}
                      </div>
                      <div className="flex-grow flex items-center gap-2">
                        <FiUser className="w-4 h-4 text-gray-400" />
                        <span className="font-sm text-sm text-gray-800">
                          25 Learners
                        </span>
                      </div>
                    </div>
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
            ))
          ) : (
            <div className="text-center mt-8">No Suggestions Exist!!!</div>
          )}
        </div>

        <CreateCohortModal isClicked={clicked} closeModal={handleClose} />
      </div>
    </>
  );
};

export default CohortDashBoard;
