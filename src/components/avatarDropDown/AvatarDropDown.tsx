import { FaCircleUser } from "react-icons/fa6";

const AvatarDropDown = () => {
    return (
        <div className="flex">
            <FaCircleUser color="rgba(0, 142, 239, 1)" className="w-16 h-7" />
            <select name="select" className="flex-shrink">
                <option value="value 1">Cephas</option>
                <option value="value 2">Schola</option>
                <option value="value 3">Ivy Michael</option>
                <option value="value 4">Joy</option>
                <option value="value 4">Emmmanuella</option>
                <option value="value 4">Marvelous</option>
            </select>
        </div>
        
    );
};

export default AvatarDropDown;


