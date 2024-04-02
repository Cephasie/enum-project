import Picture from "@/assets/Picture";
import { GoArrowRight } from "react-icons/go";
import CustomButton from "../button/Button";
import viewProfileStyles from "../button/buttonStyles/ViewProfileStyles";
import { SchoolBannerStyle } from "@/assets/style/SchoolBannerStyke";
import CohortAvatarStyle from "@/assets/style/CohortAvatarStyle";
import { CohortLetterStyle } from "@/assets/style/CohortLetterStyle";


const SchoolBanner = () => {
  return (
    <div className="md:mt-3 relative bg-[url('/unsplash_LWfFfA5U5z8.png')]">
     
      <img src='/unsplash_LWfFfA5U5z8.png' alt="" className="h-48 w-full   md:h-auto md:w-auto" />

      <div className="flex flex-col justify-center items-center absolute top-1/4 md:top-1/2 left-4 transform md:-translate-y-1/2 gap-3 backdrop-blur-sm bg-white/30 h-24 md:w-[190px] w-48">
        <div className="flex justify-center items-center gap-1">
          <Picture url={"/company-logo.png"} style={SchoolBannerStyle} />
          <span className="text-white text-sm font-semibold">Semicolon Africa</span>
        </div>
        <CustomButton 
          text="View Profile"
          icons={[<GoArrowRight />]}
          style={viewProfileStyles}
          isDisabled={false}
        />
      </div>
    </div>
  );
};

export default SchoolBanner;
