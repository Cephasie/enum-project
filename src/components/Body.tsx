import React, {useState} from 'react';
import SideBar from "@/components/sideBar/SideBar";
import MainContent from "@/components/mainContent/MainContent";

function Body(props:any) {

    const [selectedTab, setSelectedTab] = useState("Cohorts");
    return (
        <div className={"flex"}>
            <SideBar selectedTab={selectedTab} onClick={setSelectedTab} />
            <MainContent content={selectedTab} />
        </div>
    );
}

export default Body;