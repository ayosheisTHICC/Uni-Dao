//@ts-nocheck
import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import React from 'react';
import { defineChain } from "thirdweb";


const chain = defineChain(1115)

const client = createThirdwebClient({
  clientId: "e6b0aac5a94625cd48e7cf572c7e7e4b",
  secretKey:"3KylpXWGtSRxXVPyYc_Rzo8DxfrL73Shf977JwoCqoUaDljcNcgmhMETB_6--uuw2r8jxX4eDabFnj9AfBdvbg", // Your actual clientId
  chains: [chain], // Ensure the custom chain is recognized by the client
});




export default function Wallet() {
  return (
    <div>
      <ConnectButton client={client} chain={chain} />
    </div>
  );
}
