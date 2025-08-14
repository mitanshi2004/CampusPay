import React from "react";
import { useNavigate } from "react-router-dom";

export const Appbar = () => {
    const navigate = useNavigate();
    const username = localStorage.getItem("username");

    return (
        <div className="font-mono shadow-md h-16 flex justify-between items-center p-4 bg-gradient-to-r from-[#7a5cff] to-[#9b6bff] text-white">
            {/* Logo */}
            <div className="flex items-center h-full px-4 rounded-full bg-black text-white">
                CampusPay
            </div>

            {/* User info + Logout */}
            <div className="flex items-center">
                <span className="mr-4">{username}</span>
                <button
                    className="text-white font-medium rounded-full text-xs px-3 py-1 bg-gradient-to-r from-[#7a5cff] to-[#9b6bff] hover:from-[#9b6bff] hover:to-[#7a5cff] transition"
                    onClick={() => {
                        localStorage.removeItem("token");
                        navigate("/");
                    }}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};
