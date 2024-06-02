import React, { ReactNode } from "react";

export default function Header({ children }: { children: ReactNode }) {
  return (
    <div>
      i am header
      <div>{children}</div>
    </div>
  );
}
