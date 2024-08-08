"use client";

import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

export const ThirdwebClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThirdwebProvider activeChain={ChainId.Mainnet}>
      {children}
    </ThirdwebProvider>
  );
};
