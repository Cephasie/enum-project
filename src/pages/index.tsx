"use client";
import { Inter } from "next/font/google";
import SchoolHeader from "@/components/schoolHeader/SchoolHeader";
import SchoolBanner from "@/components/schoolBanner/SchoolBanner";
import SideBar from "@/components/sideBar/SideBar";
import MainContent from "@/components/mainContent/MainContent";
import { useState } from "react";
import CustomInput from "@/input/CustomInput";
import ReduxProvider from "@/reduxProvider/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("Cohorts");

  return (
    <ReduxProvider>
      <>
        <SchoolHeader />
        <SchoolBanner />
         <SideBar selectedTab={selectedTab} onClick={setSelectedTab} />
        <MainContent content={selectedTab} /> 
      </>
    </ReduxProvider>
  );
}
