import Image from "next/image";

interface ImageProps {
  url: string;
  style:any;
}
const Picture: React.FC<ImageProps> = ({ url,style }) => {
  return (
    <img src={url} style={style} alt={""} />
  );
};
export default Picture;
