import React, { useEffect, useState } from "react";
import axios from "axios";

export const TransactionsSidebar = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTransactions = async () => {
            const token = localStorage.getItem("token");
            try {
                const response = await axios.get("http://localhost:3000/api/v1/account/history", {
                    headers: {
                        authorization: 'Bearer ' + token
                    }
                });
                setTransactions(response.data);
            } catch (error) {
                console.error("Error fetching transactions", error);
            } finally {
                setLoading(false);
            }
        };
        fetchTransactions();
    }, []);

    return (
        <div className="w-full md:w-80 bg-[#111122] p-6 border-l border-[#2a2a3d] overflow-y-auto max-h-screen">
            <h2 className="text-xl font-semibold text-white mb-4 border-b border-[#2a2a3d] pb-3">
                Transaction History
            </h2>
            {loading ? (
                <div className="text-center text-gray-400">Loading...</div>
            ) : transactions.length > 0 ? (
                <ul className="space-y-3">
                    {transactions.map((transaction) => (
                        <li 
                            key={transaction._id} 
                            className="p-4 border border-[#2a2a3d] rounded-lg bg-[#1c1c2b]"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <div className="text-gray-400 text-sm">
                                    {new Date(transaction.date).toLocaleDateString()} 
                                    <span className="text-gray-500 text-xs ml-2">
                                        {new Date(transaction.date).toLocaleTimeString()}
                                    </span>
                                </div>
                                <div className={`text-sm font-medium ${transaction.from._id === localStorage.getItem("userId") ? "text-red-400" : "text-green-400"}`}>
                                    {transaction.from._id === localStorage.getItem("userId") ? `- Rs. ${transaction.amount}` : `+ Rs. ${transaction.amount}`}
                                </div>
                            </div>
                            <div className="text-gray-300 text-sm">
                                <div>From: {transaction.from.username}</div>
                                <div>To: {transaction.to.username}</div>
                                <div className="text-gray-500 text-xs mt-1">
                                    ID: {transaction._id}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="text-center text-gray-400">No transactions found.</div>
            )}
        </div>
    );
};
