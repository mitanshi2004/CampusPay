import React from "react";

export function Heading({ label }) {
  return (
    <h1 className="font-bold text-4xl pt-2 text-white">
      {label}
    </h1>
  );
}
