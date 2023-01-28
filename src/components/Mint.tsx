import { BodyText } from 'components/Text'
import { ethers } from 'ethers'
import { useContractRead, useContractWrite, useWaitForTransaction } from 'wagmi'
import Button from 'components/Button'
import ERC721ABI from 'models/ERC721ABI'
import env from 'helpers/env'

export default function ({ id }: { id: number }) {
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
    return <BodyText>Owner: {data}</BodyText>
  }
  if (isSuccess) {
    return <BodyText>Minted!</BodyText>
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