import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter,
        { params: { userId }} )
            .then(response => {
                setUsers(response.data.user);
            });
    }, [filter]);

    return (
        <>
            <div className="m-4">
                <input 
                    onChange={(e) => setFilter(e.target.value)} 
                    type="text" 
                    placeholder="Search users..." 
                    className="w-full px-3 py-2 bg-[#111122] text-white placeholder-gray-400 rounded-full border border-[#2a2a3d] focus:outline-none focus:ring-2 focus:ring-[#9b6bff]"
                />
            </div>
            <div className="font-bold mt-6 text-lg m-4 text-white">Contacts</div>
            <div>
                {users.map((user, index) => <User key={index} user={user} />)}
            </div>
        </>
    );
}

function User({ user }) {
    const navigate = useNavigate();

    return (
        <div className="flex justify-between items-center pb-2 m-4 border-b border-[#2a2a3d]">
            <div className="flex items-center">
                <div className="rounded-full h-12 w-12 bg-[#1c1c2b] flex justify-center items-center text-xl text-[#9b6bff] font-bold mr-3">
                    {user.firstName[0]}
                </div>
                <div className="text-white">
                    {user.firstName} {user.lastName}
                </div>
            </div>
            <Button 
                onClick={() => {
                    navigate("/send?id=" + user._id + "&name=" + user.firstName);
                }} 
                label="Send Money" 
            />
        </div>
    );
}
