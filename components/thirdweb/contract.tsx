import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";

// create the client with your clientId, or secretKey if in a server environment
export const client = createThirdwebClient({ 
  clientId: "4f4d7aad88cd12953957137f0f7c0081"
 });

//  const customChain = defineChain(1115)

// connect to your contract
export const contract = getContract({ 
  client, 
  chain: defineChain(1115), 
  address: "0x466697AD5DC3F5Df95c3EE4309B61E7d06961572"
});