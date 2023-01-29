import { BodyText } from 'components/Text'
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
        I am hard at work building the arena smart contract and the front end
        for it! The general things that you might expect are listed below.
        However, I might change the rules before launch to make it more fun.
      </BodyText>
      <BodyText>
        <ul className={list}>
          <li>
            User A creates a battle lobby by depositing 10 cards into the arena
            contract
          </li>
          <li>
            User B sees the lobby and joins the battle by depositing 10 cards
            into the lobby
          </li>
          <li>Both users see each others decks of 10 cards</li>
          <li>
            Both users can withdraw from the lobby before the next step (so that
            you're not locked in fighting the @dwr card lol)
          </li>
          <li>
            Both users secretly select 5 cards from their decks and secretly put
            them on 3 battle lines (x, y and z)
          </li>
          <li>
            For instance, user A might put 2 strong cards on line x, 2 weak
            cards on line y, and one super strong card on line z
          </li>
          <li>
            When both users select 5 cards and their lines, the battle is
            triggered
          </li>
          <li>Battle commences on each line separately 2 times</li>
          <li>In the first round user A attacks user B on all three lines</li>
          <li>In the second round user B attacks user A on all three lines</li>
          <li>
            When attacking all attack attributes of the attacking side's cards
            on the lane are summed
          </li>
          <li>
            The attack score is used to deal damage to the defense attributes of
            the defending side's cards on the lane
          </li>
          <li>
            Whoever is left with a higher score (defense of self minus attack of
            the opponent) on each lane gets all the cards played in the lane
          </li>
          <li>
            If player A wins lines x and z, but loses line y, then player A gets
            all cards from line x and z, and player B gets all cards from line y
          </li>
        </ul>
      </BodyText>
    </div>
  )
}
