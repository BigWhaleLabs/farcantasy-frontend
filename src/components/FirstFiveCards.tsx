import Card from 'components/Card'
import classnames, {
  display,
  flexDirection,
  flexWrap,
  gap,
  justifyContent,
} from 'classnames/tailwind'

const container = classnames(
  display('flex'),
  flexDirection('flex-row'),
  flexWrap('flex-wrap'),
  justifyContent('justify-center'),
  gap('gap-4')
)
export default function () {
  return (
    <div className={container}>
      <Card id={1} />
      <Card id={2} />
      <Card id={3} />
      <Card id={4} />
      <Card id={5} />
    </div>
  )
}
