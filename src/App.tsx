import { Route, Router } from 'wouter'
import { TitleText } from 'components/Text'
import Arena from 'pages/Arena'
import Card from 'pages/Card'
import Main from 'pages/Main'
import Root from 'components/Root'
import WalletProvider from 'components/WalletProvider'
import useHashLocation from 'hooks/useHashLocation'

export default function () {
  return (
    <WalletProvider>
      <Router hook={useHashLocation}>
        <Root>
          <a href="#/">
            <TitleText>Farcantasy</TitleText>
          </a>
          <Route path="/" component={Main} />
          <Route path="/arena" component={Arena} />
          <Route path="/:usernameOrId">
            {({ usernameOrId }: { usernameOrId: string }) =>
              usernameOrId !== 'arena' && <Card />
            }
          </Route>
        </Root>
      </Router>
    </WalletProvider>
  )
}
