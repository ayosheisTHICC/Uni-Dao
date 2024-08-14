//@ts-nocheck
// "use client"
// import React from 'react'
// import { useState, useEffect } from 'react'
// import { getWalletInfo } from 'thirdweb/wallets'

// import Purpose from '@/components/thirdweb/propose'
// import GetPurpose from "@/components/thirdweb/getProposal"

// const [wallets, setWallets] = useState(null);

//   useEffect(() => {
//     const fetchWalletInfo = async () => {
//       const walletData = await getWalletInfo("io.metamask");
//       setWallets(walletData);
//       console.log(walletData); // Now you can use walletData
//     };

//     fetchWalletInfo();
//   }, []);
  
//   console.log(wallets)

// export default function page() {
//   return (
//     <div><GetPurpose/></div>
//   )
// }


"use client"
import React, { useState, useEffect } from 'react'
import { WalletInfo, getWalletInfo } from 'thirdweb/wallets'
import { useActiveAccount } from 'thirdweb/react'

// import Purpose from '@/components/thirdweb/propose'
import GetPurpose from "@/components/thirdweb/getProposal"

export default function page() {
  const [wallets, setWallets] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    const fetchWalletInfo = async () => {
      const walletData = await getWalletInfo("io.metamask");
      setWallets(walletData.image_id);
    };

    fetchWalletInfo();
  }, []);

  useEffect(() => {
    const walletAddress = async () => {
      const walletInfo = await useActiveAccount();
      setAddress(walletInfo.address)
    }
    walletAddress();

  }, [])

  console.log(address);

  // const info = wallet.json()
  console.log("the type of" ,typeof(wallet))

  // console.log(info)

  return (
    <div>
      <GetPurpose wallets={wallets} />
    </div>
  );
}

