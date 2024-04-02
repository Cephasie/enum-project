import { LuUsers } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { FiBriefcase } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { useState } from "react";
import SideBarItems from "./sideBarItems/SideBarItems";
import { MenuItem, Select } from "@mui/material";

interface Props {
  selectedTab: string;
  onClick: (tabs: string) => void;
}

const SideBar: React.FC<Props> = ({ selectedTab, onClick }) => {
  return (
    <div className="">
      <div className="md:hidden  flex flex-col  w-full pt-10 items-center">
        <div className="flex w-3/4 items-start pb-2">Switch between tabs</div>
        <Select className="w-3/4  ">
          <MenuItem>    <div
      className="flex justify-center items-center  cursor-pointer"
      onClick={() => {
        onClick('Cohorts');
      }}
    >
      <div
        className={`font-semibold text-sm flex flex-row gap-4 justify-center items-center  w-3/4 h-8  rounded-lg  ${
          selectedTab === 'Cohorts' ? "bg-[#F6FCFF] text-[#008EEF]" : ""}`}>
        {<LuUsers/>}
        <div className="w-3/4">{'Cohorts'}</div>
      </div>
    </div></MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
          <MenuItem></MenuItem>
        </Select>
      </div>
      <div className="hidden  md:flex md:flex-col  md:w-[251px] md:h-[234.11px]   gap-1 mt-5">
      <SideBarItems selectedTab={selectedTab} onClick={onClick} item={'Cohorts'} icon={<LuUsers/>}/>
      <SideBarItems selectedTab={selectedTab} onClick={onClick} item={'Programs'} icon={<IoBookOutline/>}/>
      <SideBarItems selectedTab={selectedTab} onClick={onClick} item={'Instructors'} icon={<FiBriefcase/>}/>
      <SideBarItems selectedTab={selectedTab} onClick={onClick} item={'Learners'} icon={<FiUser/>}/>
    </div>
    </div>
  );
};
export default SideBar;
