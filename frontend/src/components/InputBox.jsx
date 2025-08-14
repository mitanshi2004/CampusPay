import React from "react";

export function InputBox({ label, placeholder, onChange, type = "text" }) {
  return (
    <div className="mb-4">
      <label className="text-sm font-medium text-left py-2 block text-[#ccc]">
        {label}
      </label>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-lg border-[#33334d] bg-[#0d0d18] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9b6bff]"
      />
    </div>
  );
}
