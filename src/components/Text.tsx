import {
  backgroundClip,
  backgroundImage,
  classnames,
  fontSize,
  fontWeight,
  gradientColorStops,
  letterSpacing,
  margin,
  textColor,
  textTransform,
} from 'classnames/tailwind'
import ChildrenProp from 'models/ChildrenProp'

const whiteText = classnames(textColor('text-white'))

const titleText = classnames(
  fontSize('text-5xl', 'md:text-8xl'),
  fontWeight('font-extrabold'),
  textColor('text-transparent'),
  backgroundClip('bg-clip-text'),
  backgroundImage('bg-gradient-to-r'),
  gradientColorStops('from-yellow-600', 'to-red-600'),
  textTransform('uppercase'),
  letterSpacing('tracking-tighter'),
  margin('mb-8')
)
export function TitleText({ children }: ChildrenProp) {
  return <h1 className={titleText}>{children}</h1>
}

const headerText = classnames(
  whiteText,
  fontSize('text-3xl', 'md:text-6xl'),
  fontWeight('font-bold')
)
export function HeaderText({ children }: ChildrenProp) {
  return <p className={headerText}>{children}</p>
}

const bodyText = classnames(textColor('text-purple-200'), fontSize('text-lg'))
export function BodyText({ children }: ChildrenProp) {
  return <p className={bodyText}>{children}</p>
}
