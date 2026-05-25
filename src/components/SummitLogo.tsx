import React from "react";
import logo from "@/assets/summit-logo.png";

const SummitLogo = ({ compact = false }: { compact?: boolean }) => (
  <div className="flex items-center">
    <img
      src={logo}
      alt="Summit Securities"
      className={compact ? "h-7 w-auto" : "h-9 w-auto"}
      draggable={false}
    />
  </div>
);

export default SummitLogo;
