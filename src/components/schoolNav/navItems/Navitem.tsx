

const NavItem = ({ item, onClick, isSelected }) => {
  return (
   
      <div
        className={`font-semibold text-sm group cursor-pointer  hover:bg-[#F6FCFF] ${
          isSelected ? "font-bold text-[#008EEF] bg-[#F6FCFF]" : ""
        } h-9 rounded-2xl w-[130px] flex flex-col justify-center items-center`}
        onClick={onClick}
      >
        <p>{item}</p>
        {isSelected && (
          <div className="h-1.5 w-[130px] bg-blue-500 absolute top-[75px] rounded-t-lg"></div>
        )}
      </div>
    
  );
};
export default NavItem;
