import React from "react";

export function Button({ label, onClick }) {
  return (
    <button 
      onClick={onClick} 
      type="button" 
className="text-white font-medium rounded-lg text-sm px-4 py-2 bg-gradient-to-r from-[#7a5cff] to-[#9b6bff] hover:from-[#9b6bff] hover:to-[#7a5cff] transition"

    >
      {label}
    </button>
  );
}
