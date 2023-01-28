import { BodyText, HeaderText, Link } from 'components/Text'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import FirstFiveCards from 'components/FirstFiveCards'
import classnames, {
  display,
  flexDirection,
  gap,
  listStylePosition,
  listStyleType,
} from 'classnames/tailwind'

const textContainer = classnames(
  display('flex'),
  flexDirection('flex-col'),
  gap('gap-2')
)
const list = classnames(
  listStylePosition('list-inside'),
  listStyleType('list-disc')
)

export default function () {
  return (
    <>
      <div className={textContainer}>
        <BodyText>
          What the f$%k?! You can now trade Farcaster users? How does this magic
          work?
        </BodyText>
        <BodyText>
          <ul className={list}>
            <li>Connect a wallet below to get started</li>
            <li>Pick a Farcaster user card to mint</li>
            <li>Mint costs 0.0065 ETH to avoid spam attacks</li>
            <li>
              Trade your Farcaster user cards{' '}
              <Link href="https://opensea.io/assets/ethereum/ethereum/0x2bD8c9F0c485b910C11AB61Fd4145C4FEe31954D">
                on OpenSea
              </Link>
            </li>
            <li>
              Each card has attack and defense that depend on number of
              followers and following
            </li>
            <li>
              You can mint low-stats users to re-sell later if they are
              promising
            </li>
            <li>
              Initially, only the first 1000 users are available — hurry to get
              yours until they are all gone!
            </li>
            <li>
              More cards will be released in the future, follow{' '}
              <Link href="https://fcast.me/borodutch">@borodutch</Link> for
              updates
            </li>
            <li>
              Will there be a battleground game later with these cards? Who
              knows!
            </li>
          </ul>
        </BodyText>
        <BodyText>Now go get 'em, tiger! 🐯</BodyText>
        <ConnectButton accountStatus="address" />
        <HeaderText>
          The first 5 cards are below. You get to a user card by going to
          farcantasy.xyz/#/username_or_fid. Good luck!
        </HeaderText>
        <FirstFiveCards />
      </div>
    </>
  )
}
