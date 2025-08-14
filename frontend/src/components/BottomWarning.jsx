import React from "react";
import { Link } from "react-router-dom";

export function BottomWarning({ label, buttonText, to }) {
  return (
    <div className="text-sm text-[#ccc] mt-4">
      {label}{" "}
      <Link
        to={to}
        className="bg-[#0d0d18] text-white px-2 py-1 rounded-md border border-[#9b6bff] hover:text-[#9b6bff] transition"
      >
        {buttonText}
      </Link>
    </div>
  );
}
