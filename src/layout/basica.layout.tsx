import { ReactNode } from "react";
import { Navbar } from "../components";
interface BasicaProps {
  children?: ReactNode;
}
export function LayoutBasica({ children }: BasicaProps) {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex-grow">{children}</div>
    </div>
  );
}
