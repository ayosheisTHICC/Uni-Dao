//@ts-nocheck
"use client";
import { useState, useEffect } from 'react';
import { useReadContract, useSendTransaction, useActiveAccount } from "thirdweb/react";
import { prepareContractCall } from "thirdweb";
import { contract } from "./contract"; 

export default function ProposalsComponent() {
  const [proposals, setProposals] = useState([]);
  const [hasVoted, setHasVoted] = useState({});
  const [votes, setVotes] = useState({});
  const address = useActiveAccount(); 
  const { data: proposalsData, isLoading: isLoadingProposals } = useReadContract({
    contract,
    method: "function getAllProposals() view returns ((uint256 proposalId, address proposer, address[] targets, uint256[] values, string[] signatures, bytes[] calldatas, uint256 startBlock, uint256 endBlock, string description)[] allProposals)",
    params: [],
  });

  const { mutate: sendTransaction } = useSendTransaction();

  useEffect(() => {
    if (proposalsData) {
      setProposals(proposalsData);
    }
  }, [proposalsData]);

  const checkHasVoted = async (proposalId) => {
    if (address) {
      const { data: votedData } = await useReadContract({
        contract,
        method: "function hasVoted(uint256 proposalId, address account) view returns (bool)",
        params: [proposalId, address],
      });
      setHasVoted(prev => ({ ...prev, [proposalId]: votedData }));
    }
  };

  const handleVote = async (proposalId, support) => {
    if (address) {
      const transaction = prepareContractCall({
        contract,
        method: "function castVote(uint256 proposalId, uint8 support) returns (uint256)",
        params: [proposalId, support],
      });
      await sendTransaction(transaction);

    }
  };

  return (
    <div>
      {isLoadingProposals ? (
        <p>Loading proposals...</p>
      ) : (
        <ul>
          {proposals.map((proposal, index) => (
            <li key={index}>
              <p>Description: {proposal.description}</p>
              <p>Proposal ID: {proposal.proposalId}</p>
              <button
                disabled={hasVoted[proposal.proposalId]}
                onClick={() => handleVote(proposal.proposalId, 1)}
              >
                For {votes[proposal.proposalId]?.for || 0}
              </button>
              <button
                disabled={hasVoted[proposal.proposalId]}
                onClick={() => handleVote(proposal.proposalId, 0)}
              >
                Against {votes[proposal.proposalId]?.against || 0}
              </button>
              <button
                disabled={hasVoted[proposal.proposalId]}
                onClick={() => handleVote(proposal.proposalId, 2)}
              >
                Abstain {votes[proposal.proposalId]?.abstain || 0}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
