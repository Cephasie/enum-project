import React from 'react';
import Picture from "@/assets/Picture";
import { UploadImageStyle } from "@/assets/style/UploadImageStyle";
import CustomInput from "@/input/CustomInput";
import { FiUpload } from "react-icons/fi";

interface UploadImageProps {
  handleDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  handleDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  cohortData: {
    imageUrl: string;
  };
  handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UploadImage: React.FC<UploadImageProps> = ({ handleDragOver, handleDrop, cohortData, handleImageUpload }) => {

  return (
      <div
          className="flex flex-col justify-center items-center gap-5 rounded-lg  h-[120px] w-[381px] border border-dashed border-blue-400 bg-[#F6FCFF]"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
      >
        {cohortData.imageUrl !== "" ? (
            <div className="flex justify-center items-center">
              <Picture
                  url={cohortData.imageUrl}
                  style={UploadImageStyle}
              />
            </div>
        ) : (
            <>
              <FiUpload />
              <div className="flex gap-2">
                <p>Drag and drop or</p>
                <CustomInput
                    type="file"
                    style={{
                      appearance: "none",
                      width: '100px',
                      cursor: "pointer",
                    }}
                    accept="image/*"
                    //@ts-ignore
                    onChange={handleImageUpload}
                />
              </div>
            </>
        )}
      </div>
  );
};

export default UploadImage;