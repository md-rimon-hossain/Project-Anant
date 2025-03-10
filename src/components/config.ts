import { http, createConfig } from 'wagmi'
import { bsc } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

const projectId = '16a0d7cd830c7a5d02d0b976ec405643';

export const config = createConfig({
  chains: [bsc],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask(),
    safe(),
  ],
  transports: {
    [bsc.id]: http(),
  },
})
