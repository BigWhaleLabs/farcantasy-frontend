import '@rainbow-me/rainbowkit/styles.css'

import {
  RainbowKitProvider,
  getDefaultWallets,
  midnightTheme,
} from '@rainbow-me/rainbowkit'
import {
  WagmiConfig,
  configureChains,
  createClient,
  useAccount,
  useEnsName,
} from 'wagmi'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { mainnet } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

import ChildrenProp from 'models/ChildrenProp'
import WalletContext from 'context/WalletContext'
import env from 'helpers/env'

const { chains, provider } = configureChains(
  [mainnet],
  [
    jsonRpcProvider({
      rpc: () => ({
        http: env.VITE_ETH_RPC,
      }),
    }),
    publicProvider(),
  ]
)

const { connectors } = getDefaultWallets({
  appName: 'Farcantasy',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

function Content({ children }: ChildrenProp) {
  // Account
  const { isConnected, address } = useAccount()
  // ENS name
  const { isLoading, data } =
    isConnected && address
      ? useEnsName({
          address,
          chainId: 1,
        })
      : { isLoading: true, data: null }
  return (
    <WalletContext.Provider
      value={{
        address,
        connected: isConnected,
        name: data,
        isLoading,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export default function ({ children }: ChildrenProp) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        coolMode
        chains={chains}
        theme={midnightTheme({
          ...midnightTheme.accentColors.purple,
        })}
      >
        <Content>{children}</Content>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
