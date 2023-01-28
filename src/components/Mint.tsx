import { BodyText, Link } from 'components/Text'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { ethers } from 'ethers'
import {
  useAccount,
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi'
import Button from 'components/Button'
import ERC721ABI from 'models/ERC721ABI'
import classnames, { wordBreak } from 'classnames/tailwind'
import env from 'helpers/env'

const ownerAddress = classnames(wordBreak('break-all'))
export default function ({ id }: { id: number }) {
  const { isConnected } = useAccount()
  const { data, isLoading, isError, error } = useContractRead({
    abi: ERC721ABI,
    address: env.VITE_CONTRACT as `0x${string}`,
    functionName: 'ownerOf',
    args: [id],
    watch: true,
  })
  const { data: mintData, write } = useContractWrite({
    abi: ERC721ABI,
    address: env.VITE_CONTRACT as `0x${string}`,
    functionName: 'mint',
    mode: 'recklesslyUnprepared',
    args: [id],
    overrides: {
      value: ethers.utils.parseEther('0.0065'),
    },
  })
  const {
    isLoading: mintIsLoading,
    isSuccess,
    isError: mintIsError,
    error: mintError,
  } = useWaitForTransaction({
    hash: mintData?.hash,
  })
  if (isLoading) {
    return <BodyText>Loading ownership info...</BodyText>
  }
  if (isError && !error?.message.includes('invalid token ID')) {
    return <BodyText>Couldn't load ownership info!</BodyText>
  }
  if (data) {
    return (
      <BodyText>
        Owner: <span className={ownerAddress}>{data}</span>
      </BodyText>
    )
  }
  if (isSuccess) {
    return <BodyText>Minted!</BodyText>
  }
  if (id > 1000) {
    return (
      <BodyText>
        This user isn't up for sale yet! Follow{' '}
        <Link href="https://fcast.me/borodutch">@borodutch</Link> to get
        notified when the next batch of users enters the arena!
      </BodyText>
    )
  }
  if (!isConnected) {
    return <ConnectButton accountStatus="address" />
  }
  return (
    <>
      <Button
        onClick={() => {
          write()
        }}
        title={mintIsLoading ? 'Minting...' : 'Mint!'}
        disabled={mintIsLoading}
      />
      {mintIsError && <BodyText>Error minting: {mintError?.message}</BodyText>}
    </>
  )
}
