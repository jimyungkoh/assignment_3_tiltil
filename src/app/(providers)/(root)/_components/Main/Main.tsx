import React from "react";

function Main({ children }: { children: React.ReactNode }) {
  return <main className="px-20 py-5">{children}</main>;
}

export default Main;
