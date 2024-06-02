"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type BaseLayoutProps = {
  children: ReactNode;
  className?: string;
};

export default function BaseLayout({ children, className }: BaseLayoutProps) {
  return <div className={cn("max-w-7xl mx-auto", className)}>{children}</div>;
}
