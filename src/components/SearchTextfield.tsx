import { JSX, TargetedEvent } from 'preact/compat'
import { useEffect, useState } from 'preact/hooks'
import { useLocation } from 'wouter'
import Button from 'components/Button'
import classnames, {
  borderRadius,
  display,
  flexDirection,
  flexGrow,
  gap,
  padding,
} from 'classnames/tailwind'

const container = classnames(
  display('flex'),
  flexDirection('flex-row'),
  gap('gap-2')
)
const textfield = classnames(
  borderRadius('rounded'),
  padding('py-2', 'px-4'),
  flexGrow('grow')
)
export default function () {
  const [, setLocation] = useLocation()
  const [value, setValue] = useState('')
  const [valid, setValid] = useState(false)
  useEffect(() => {
    setValid(value.length > 0)
  }, [value])
  return (
    <div className={container}>
      <input
        placeholder="borodutch"
        className={textfield}
        type="text"
        onInput={({
          currentTarget,
        }: JSX.TargetedEvent<HTMLInputElement, Event>) => {
          setValue(currentTarget.value)
        }}
      />
      <Button
        disabled={!valid}
        onClick={() => {
          setLocation(`#/${value}`)
        }}
        title="Go!"
      />
    </div>
  )
}
