import { BodyText } from 'components/Text'
import useSlug from 'hooks/useSlug'

export default function () {
  const slug = useSlug()
  return <BodyText>{slug}</BodyText>
}
