import { BodyText, TitleText } from 'components/Text'
import Root from 'components/Root'
import classnames, {
  display,
  flexDirection,
  gap,
  listStylePosition,
  listStyleType,
  textDecoration,
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
const link = classnames(textDecoration('underline'))
export default function () {
  return (
    <Root>
      <TitleText>Farcantasy</TitleText>
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
              <a
                className={link}
                href="https://opensea.io/assets/ethereum/ethereum/0x2bD8c9F0c485b910C11AB61Fd4145C4FEe31954D"
              >
                on OpenSea
              </a>
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
              <a className={link} href="https://fcast.me/borodutch">
                @borodutch
              </a>{' '}
              for updates
            </li>
            <li>
              Will there be a battleground game later with these cards? Who
              knows!
            </li>
          </ul>
        </BodyText>
        <BodyText>Now go get 'em, tiger! 🐯</BodyText>
      </div>
    </Root>
  )
}
