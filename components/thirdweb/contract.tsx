import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";

// create the client with your clientId, or secretKey if in a server environment
export const client = createThirdwebClient({ 
  clientId: "e6b0aac5a94625cd48e7cf572c7e7e4"
 });

// connect to your contract
export const contract = getContract({ 
  client, 
  chain: defineChain(1115), 
  address: "0xF827F33aDC9e0eF53E0c9Bab626226A90bb84F01"
});