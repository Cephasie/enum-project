import { SetStateAction, useState } from "react";
import NavItem from "./navItems/Navitem";

const SchoolNav = () => {
    const [selectedItem, setSelectedItem] = useState('Home');
  
    const handleItemClick = (item:string) => {
      setSelectedItem(item);
    };
  
    return (
      <div className="flex flex-row justify-center items-center pt-5 w-full"> {/* Added w-full to adjust width */}
        <NavItem item={'Home'} isSelected={selectedItem === 'Home'} onClick={() => handleItemClick('Home')} />
        <NavItem item={'WorkSpace'} isSelected={selectedItem === 'WorkSpace'} onClick={() => handleItemClick('WorkSpace')} />
        <NavItem item={'Resources Library'} isSelected={selectedItem === 'Resources Library'} onClick={() => handleItemClick('Resources Library')} />
      </div>
    );
  };
  
  export default SchoolNav;
