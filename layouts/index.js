import React from "react";
import Header from "@/components/Header";

export default function Layout({ children }) {
  return (
    <div className="h-full bg-slate-900">
      <Header />
      <div className="w-full flex justify-center">
        <div className="w-4/5 text-white">{children}</div>
      </div>
    </div>
  );
}
