//@ts-nocheck
import { useState } from "react";
import { prepareContractCall } from "thirdweb";
import { useSendTransaction } from "thirdweb/react";
import {contract} from "./contract"

export default function ProposalComponent() {
  const { mutate: sendTransaction, isLoading, error } = useSendTransaction();

  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    try {
      const transaction = await prepareContractCall({ 
        contract,
        method: "function propose(address[] targets, uint256[] values, bytes[] calldatas, string description) returns (uint256 proposalId)", 
        params: [["0x466697AD5DC3F5Df95c3EE4309B61E7d06961572"], [0], ["0x"], description] 
        
      });
      sendTransaction(transaction);
      
    } catch (err) {
      console.error("Error preparing transaction:", err);
    }
  };

  return (
    <div>
      <h2>Create a Proposal</h2>
      
      <input
        type="text"
        placeholder="Enter description"
        onChange={(e) => setDescription(e.target.value)}
        className="text-black"
      />
      <button onClick={handleSubmit} disabled={isLoading} className="bg-red-500">
        {isLoading ? "Submitting..." : "Submit Proposal"}
      </button>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}
