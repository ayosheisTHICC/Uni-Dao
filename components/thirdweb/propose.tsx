//@ts-nocheck
import { useState } from "react";
import { prepareContractCall } from "thirdweb";
import { useSendTransaction } from "thirdweb/react";

export default function ProposalComponent() {
  const { mutate: sendTransaction, isLoading, error } = useSendTransaction();

  const [targets, setTargets] = useState([]);
  const [values, setValues] = useState([]);
  const [calldatas, setCalldatas] = useState([]);
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    try {
      const transaction = await prepareContractCall({ 
        contract, 
        method: "function propose(address[] targets, uint256[] values, bytes[] calldatas, string description) returns (uint256 proposalId)", 
        params: [targets, values, calldatas, description] 
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
        placeholder="Enter targets (comma-separated)"
        onChange={(e) => setTargets(e.target.value.split(","))}
      />
      <input
        type="text"
        placeholder="Enter values (comma-separated)"
        onChange={(e) => setValues(e.target.value.split(","))}
      />
      <textarea
        placeholder="Enter calldatas (comma-separated)"
        onChange={(e) => setCalldatas(e.target.value.split(","))}
      />
      <input
        type="text"
        placeholder="Enter description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? "Submitting..." : "Submit Proposal"}
      </button>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}
