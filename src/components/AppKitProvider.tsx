import React from 'react';
import { createAppKit } from '@reown/appkit/react';
import { cookieStorage, createStorage, WagmiProvider } from 'wagmi';
import { bsc } from '@reown/appkit/networks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';

// 0. Setup queryClient
const queryClient = new QueryClient();

// 1. Get projectId from https://cloud.reown.com
const projectId = '16a0d7cd830c7a5d02d0b976ec405643';


// 2. Create a metadata object (optional but recommended)
const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'https://bsc-connect.netlify.app/', // Should match your app domain
  icons: ['https://avatars.githubusercontent.com/u/179229932']
};

// 3. Set the networks you want to support
const networks: [typeof bsc] = [bsc];


// 4. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  networks,
  projectId,
  ssr: true
});



// 5. Create the modal using createAppKit()
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true
  },
});


// 6. Define the AppKitProvider
export function AppKitProvider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}