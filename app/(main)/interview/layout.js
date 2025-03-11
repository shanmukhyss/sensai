import { Suspense } from "react";
import {  ClockLoader } from "react-spinners";

export default function Layout({ children }) {
  return (
    <div className="px-5">
      <Suspense
        fallback={<ClockLoader/>}
      >
        {children}
      </Suspense>
    </div>
  );
}