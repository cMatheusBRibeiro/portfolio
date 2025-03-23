"use client";

import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import { useSelector } from "react-redux";
import { MainStore } from "@/store/MainStore";

type AppWrapperProps = {
  children: ReactNode;
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const AppWrapper = ({ children }: AppWrapperProps) => {
  const theme = useSelector((state: MainStore) =>
    state.theme.darkMode ? "application--dark" : "application--light"
  );

  return <body className={`${poppins.className} ${theme}`}>{children}</body>;
};

export default AppWrapper;
