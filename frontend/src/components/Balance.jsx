import React from "react";

export const Balance = ({ value }) => {
  return (
    <div className="bg-[#111122] rounded-lg shadow-lg p-6 text-center m-6 border border-[#2a2a3d]">
      <h2 className="text-3xl font-bold text-white">Current Balance</h2>
      <p className="text-2xl text-[#9b6bff] mt-4">Rs. {value}</p>
    </div>
  );
};
