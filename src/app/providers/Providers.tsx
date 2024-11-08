"use client";
import React, { ReactNode, lazy } from "react";
import { LayoutProvider } from "./LayoutProvider";
interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return <LayoutProvider>{children}</LayoutProvider>;
};

export default Providers;
