import { http, createConfig } from 'wagmi'
import { bsc } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

const projectId = 'f8a335c6481184c71d006425f2c1676b';

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