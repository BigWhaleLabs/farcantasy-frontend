import { BodyText, HeaderText } from 'components/Text'
import { proxy, useSnapshot } from 'valtio'
import { useEffect } from 'preact/hooks'
import Card from 'components/Card'
import Loading from 'components/Loading'
import Metadata from 'models/Metadata'
import Mint from 'components/Mint'
import SuspenseWithError from 'components/SuspenseWithError'
import classnames, {
  display,
  flexDirection,
  flexGrow,
  gap,
  justifyContent,
} from 'classnames/tailwind'
import getMetadata from 'helpers/getMetadata'
import useSlug from 'hooks/useSlug'

const state = proxy<{
  metadata: Promise<Metadata> | undefined
}>({ metadata: undefined })

const container = classnames(
  display('flex'),
  flexDirection('flex-col', 'md:flex-row'),
  justifyContent('justify-center'),
  gap('gap-8')
)
const metadataContainer = classnames(
  display('flex'),
  flexDirection('flex-col'),
  flexGrow('grow'),
  gap('gap-2')
)
function CardSuspended() {
  const { metadata } = useSnapshot(state)
  if (!metadata) {
    return <BodyText>Couldn't load the user!</BodyText>
  }
  return (
    <div className={container}>
      <Card id={metadata.fid} />
      <div className={metadataContainer}>
        <HeaderText>{metadata.name}</HeaderText>
        <BodyText>{metadata.description}</BodyText>
        <BodyText>
          Traits:{' '}
          {metadata.attributes
            .map((a) => `${a.trait_type} — ${a.value}`)
            .join(', ')}
        </BodyText>
        <Mint id={metadata.fid} />
      </div>
    </div>
  )
}

export default function () {
  const slug = useSlug()
  useEffect(() => {
    state.metadata = getMetadata(slug)
  }, [slug])

  return (
    <SuspenseWithError
      fallback={<Loading text="Loading the user..." />}
      errorText="Failed to load the user, does this user exist?"
    >
      <CardSuspended />
    </SuspenseWithError>
  )
}
