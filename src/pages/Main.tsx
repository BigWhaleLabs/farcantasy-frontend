import { BodyText, HeaderText, Link } from 'components/Text'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Explorer from 'components/Explorer'
import FirstFiveCards from 'components/FirstFiveCards'
import SearchTextfield from 'components/SearchTextfield'
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
            <Link href="https://opensea.io/collection/farcantasy">
              on OpenSea
            </Link>
          </li>
          <li>
            Each card has attack and defense that depend on number of followers
            and following
          </li>
          <li>
            You can mint low-stats users to re-sell later if they are promising
          </li>
          <li>Every 1000 Farcaster users represent a season</li>
          <li>
            Only the first 2 seasons are available for now — hurry to get yours
            until they are all gone!
          </li>
          <li>
            More cards will be released in the future, follow{' '}
            <Link href="https://fcast.me/borodutch">@borodutch</Link> for
            updates
          </li>
          <li>
            Will there be a battleground game later with these cards? Who knows!
          </li>
          <li>
            Attack is based on followers, defense improves if you follow more
            people
          </li>
        </ul>
      </BodyText>
      <BodyText>Now go get 'em, tiger! 🐯</BodyText>
      <ConnectButton accountStatus="address" />
      <HeaderText>
        Enter the username of a user you want to mint (or their FID) below to go
        to their card!
      </HeaderText>
      <SearchTextfield />
      <HeaderText>Explore the available cards!</HeaderText>
      <Explorer />
      <HeaderText>
        The first 5 cards are below. You get to a user card by going to
        farcantasy.xyz/#/username_or_fid. Good luck!
      </HeaderText>
      <FirstFiveCards />
      <HeaderText>
        <Link href="#/arena" noTarget>
          Arena
        </Link>{' '}
        is coming soon!
      </HeaderText>
      <BodyText>
        Oh, btw, the whole project is open source. Here's{' '}
        <Link href="https://github.com/BigWhaleLabs/farcantasy-metadata">
          the metadata backend
        </Link>
        ,{' '}
        <Link href="https://github.com/BigWhaleLabs/farcantasy-frontend">
          this frontend
        </Link>{' '}
        and{' '}
        <Link href="https://github.com/BigWhaleLabs/farcantasy-contract/">
          the contract
        </Link>
        . Made with love by{' '}
        <Link href="https://fcast.me/borodutch">@borodutch</Link>!
      </BodyText>
    </div>
  )
}
