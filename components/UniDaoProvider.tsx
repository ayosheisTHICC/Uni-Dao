
//@ts-nocheck
// "use client";

// import { ThirdwebProvider } from "thirdweb/react";

// export const ThirdwebClientProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   return <ThirdwebProvider value>{children}</ThirdwebProvider>;
// };


//Import Dependencies and hooks needed for app
// "use client"
// import { createContext } from 'react'
// import {
//   useVote,
//   useToken,
//   useAddress,
//   useMetamask,
//   useDisconnect,
// } from '@thirdweb-dev/react'
// import { VoteType } from '@thirdweb-dev/sdk'
// import { ethers } from 'ethers'

// export const UniDaoProvider = createContext()
// export const UniDaoProvider = ({ children }) => {

//   /*
//     Step 1. Get User address using thirdwebs hook
//     Step 2. Get Token and vote contract instances using thirdwebs hooks
//     Step 3. We need way to connect and disconnect from the dapp. 
//   */
//   const address = true //Get the address using thirdwebs convenient hooks

//   let vote = ''
//   let token = ''
//   let connectWithMetamask = '';
//   let disconnectWallet = '';




//   //Get all the proposals in the contract
//   const getAllProposals = async () => {

//   }

//   //Check if proposal given is executable
//   const isExecutable = async id => {

//   }

//   //Check if the user has voted for the given proposal
//   const checkIfVoted = async id => {

//   }

//   //Create  proposal to mint tokens to the DAO's treasury
//   const createProposal = async description => {

//   }


//   //Execute proposal if the proposal is successful
//   const executeProposal = async id => {

//   }


//   //Vote for the proposal and delegate tokens if not already done. 
//   const voteFor = async (id, type, reason) => {

//   }
//   return (
//     <UniDaoProvider.Provider
//       value={{
//         getAllProposals,
//         isExecutable,
//         voteFor,
//         createProposal,
//         address,
//         connectWithMetamask,
//         disconnectWallet,
//         executeProposal,

//       }}
//     >
//       {children}
//     </UniDaoProvider.Provider>
//   )
// }


"use client"
import React, { createContext, ReactNode, useContext, useState } from 'react';
import {
  useVote,
  useToken,
  useAddress,
  useMetamask,
  useDisconnect,
} from 'thirdweb/react';
import { VoteType } from 'thirdweb/sdk';
import { ethers } from 'ethers';

interface UniDaoContextType {
  getAllProposals: () => Promise<void>;
  isExecutable: (id: number) => Promise<boolean>;
  voteFor: (id: number, type: VoteType, reason: string) => Promise<void>;
  createProposal: (description: string) => Promise<void>;
  address: string | null;
  connectWithMetamask: () => void;
  disconnectWallet: () => void;
  executeProposal: (id: number) => Promise<void>;
}

const UniDaoContext = createContext<UniDaoContextType | undefined>(undefined);

export const UniDaoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const address = useAddress(); // Get the address using thirdweb's hook
  const vote = useVote(); // Assuming useVote hook returns the vote contract instance
  const token = useToken(); // Assuming useToken hook returns the token contract instance
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  // Get all the proposals in the contract
  const getAllProposals = async () => {
    // Implementation goes here
  };

  // Check if proposal given is executable
  const isExecutable = async (id: number) => {
    // Implementation goes here
    return false; // Placeholder return
  };

  // Check if the user has voted for the given proposal
  const checkIfVoted = async (id: number) => {
    // Implementation goes here
  };

  // Create proposal to mint tokens to the DAO's treasury
  const createProposal = async (description: string) => {
    // Implementation goes here
  };

  // Execute proposal if the proposal is successful
  const executeProposal = async (id: number) => {
    // Implementation goes here
  };

  // Vote for the proposal and delegate tokens if not already done
  const voteFor = async (id: number, type: VoteType, reason: string) => {
    // Implementation goes here
  };

  return (
    <UniDaoContext.Provider
      value={{
        getAllProposals,
        isExecutable,
        voteFor,
        createProposal,
        address,
        connectWithMetamask,
        disconnectWallet,
        executeProposal,
      }}
    >
      {children}
    </UniDaoContext.Provider>
  );
};

export const useUniDao = () => {
  const context = useContext(UniDaoContext);
  if (context === undefined) {
    throw new Error('useUniDao must be used within a UniDaoProvider');
  }
  return context;
};
