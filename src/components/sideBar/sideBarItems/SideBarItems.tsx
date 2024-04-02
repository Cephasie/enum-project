const SideBarItems = ({ selectedTab, onClick, icon, item }) => {
  return (
    <div
      className="flex justify-center items-center w-[251px ]h-[58.53px] cursor-pointer"
      onClick={() => {
        onClick(item);
      }}
    >
      <div
        className={`font-semibold text-sm flex flex-row gap-4 justify-center items-center  w-40 h-8  rounded-lg  ${
          selectedTab === item ? "bg-[#F6FCFF] text-[#008EEF]" : ""}`}>
        {icon}
        <div className="w-20">{item}</div>
      </div>
    </div>
  );
};
export default SideBarItems;
