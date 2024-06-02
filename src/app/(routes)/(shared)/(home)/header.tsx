import { ModeToggle } from "@/components/mode-toggle";
import React, { ReactNode } from "react";

export default function Header({ children }: { children: ReactNode }) {
  return (
    <div>
      i am header
      <ModeToggle />
      <div>{children}</div>
    </div>
  );
}
