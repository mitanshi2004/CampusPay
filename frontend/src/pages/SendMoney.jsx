import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faWallet } from "@fortawesome/free-solid-svg-icons";
import { TailSpin } from "react-loader-spinner";

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState("");
    const [balance, setBalance] = useState(0);
    const [loading, setLoading] = useState(true);
    const [transferLoading, setTransferLoading] = useState(false);

    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const { data } = await axios.get("https://campuspay-svuh.onrender.com/api/v1/account/balance", {
                    params: { userId },
                    headers: { authorization: `Bearer ${token}` }
                });
                setBalance(data);
            } catch (error) {
                console.error("Error fetching balance:", error);
                alert("Could not fetch your balance. Please try again.");
            } finally {
                setLoading(false);
            }
        };
        fetchBalance();
    }, [userId, token]);

    const handleTransfer = async () => {
        if (!amount || amount <= 0 || amount > 25000) {
            alert("Amount must be between Rs. 1 and Rs. 25,000");
            return;
        }
        if (amount > balance) {
            alert("Insufficient balance");
            return;
        }

        setTransferLoading(true);
        try {
            const response = await axios.post(
                "https://campuspay-svuh.onrender.com/api/v1/account/transfer",
                { to: id, amount },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            if (response.status === 200) {
                alert("Money transferred successfully!");
                navigate("/dashboard");
            }
        } catch (error) {
            console.error("Transfer failed:", error);
            alert("Transfer failed. Please try again.");
        } finally {
            setTransferLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-[#0d0d18] relative">
            
            {/* Balance Button */}
            <button
                onClick={() => alert(`Your current balance is: Rs. ${balance}`)}
                className="absolute top-4 left-4 text-white font-medium rounded-full text-sm px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-400 hover:from-emerald-400 hover:to-green-500 transition flex items-center shadow-md"
            >
                <FontAwesomeIcon icon={faWallet} className="text-base" />
                <span className="ml-2">Check Balance</span>
            </button>

            {/* Dashboard Button */}
            <button
                onClick={() => navigate("/dashboard")}
                className="absolute top-4 right-4 text-white font-medium rounded-full text-sm px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition flex items-center shadow-md"
            >
                <FontAwesomeIcon icon={faHome} className="text-base" />
                <span className="ml-2">Dashboard</span>
            </button>

            {/* Content */}
            {loading ? (
                <TailSpin height="80" width="80" color="white" ariaLabel="loading" />
            ) : (
                <div className="bg-[#0d0d18] p-8 rounded-2xl shadow-xl w-full max-w-md transform hover:scale-[1.02] transition border border-gray-700">
                    <h2 className="text-3xl font-extrabold text-center text-white mb-6">
                        Send Money
                    </h2>

                    {/* Recipient Info */}
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center shadow-md">
                            <span className="text-2xl text-white font-bold">{name?.[0]?.toUpperCase()}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white">{name}</h3>
                    </div>

                    {/* Amount Input */}
                    <div className="mb-6">
                        <label className="block text-sm font-semibold mb-2 text-gray-300" htmlFor="amount">
                            Amount (in Rs)
                        </label>
                        <input
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            type="number"
                            min="1"
                            max="25000"
                            className="w-full p-3 border-2 border-gray-600 bg-[#1a1a2e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                            id="amount"
                            placeholder="Enter amount"
                        />
                    </div>

                    {/* Transfer Button */}
                    <button
                        onClick={handleTransfer}
                        className="w-full py-3 bg-gradient-to-r from-[#7a5cff] to-[#9b6bff] hover:from-[#9b6bff] hover:to-[#7a5cff] text-white rounded-lg font-semibold shadow-md transition"
                        disabled={transferLoading}
                    >
                        {transferLoading ? (
                            <TailSpin height="24" width="24" color="white" ariaLabel="loading" />
                        ) : (
                            "Initiate Transfer"
                        )}
                    </button>
                </div>
            )}
        </div>
    );
};
