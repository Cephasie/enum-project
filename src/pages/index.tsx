"use client";
import { Inter } from "next/font/google";
import SchoolHeader from "@/components/schoolHeader/SchoolHeader";
import SchoolBanner from "@/components/schoolBanner/SchoolBanner";
import { useState } from "react";
import ReduxProvider from "@/reduxProvider/ReduxProvider";
import Body from "@/components/Body";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <ReduxProvider>
      <>
        <SchoolHeader />
        <SchoolBanner />
          <Body/>
      </>
    </ReduxProvider>
  );
}