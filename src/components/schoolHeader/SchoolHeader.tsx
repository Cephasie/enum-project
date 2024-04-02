import Picture from "@/assets/Picture";
import SchoolNav from "../schoolNav/SchoolNav";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaCircleUser } from "react-icons/fa6";
import { BsGrid3X3GapFill } from "react-icons/bs";
import AvatarDropDown from "../avatarDropDown/AvatarDropDown";
import EnumLogo from "@/assets/pictures/logo.png";
import { AppLogoStyle } from "@/assets/style/AppLogo";
import logo from '../../../public/Logo 13149.png'
import { MobileLogoStyle } from "@/assets/style/moblieLogo";

const SchoolHeader = () => {
  return (
    <div className="border md:shadow-md md:h-20">

      <div className="md:hidden p-4 flex justify-between items-center h-10"> 
      <div className="h-10 w-[70px]">
      <Picture url={"/Logo 13149.png"} style={MobileLogoStyle} />
      </div>
      
        <div className="flex ">
        <IoMdNotificationsOutline className="w-16 h-6" />
        <FaCircleUser color="rgba(0, 142, 239, 1)" className="w-16 h-7" />
        </div>
        
      </div>

      
      <div className="hidden md:p-3 md:flex md:w-full  md:items-center "> 
    
       <Picture url={"/logo.png"} style={AppLogoStyle} />
  
        <SchoolNav  />
        <div className="flex pt-5 pr-5">
        
            <IoMdNotificationsOutline className="w-16 h-6" />
        
          <AvatarDropDown />
          <BsGrid3X3GapFill
            color="rgba(0, 142, 239, 1)"
            className="h-8 w-16"
          />
        </div>
      </div>
    </div>
  );
};
export default SchoolHeader;
