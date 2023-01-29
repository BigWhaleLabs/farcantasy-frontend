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
  textDecoration,
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
  fontSize('text-xl', 'md:text-2xl'),
  fontWeight('font-bold'),
  margin('mt-8', 'mb-6')
)
export function HeaderText({ children }: ChildrenProp) {
  return <p className={headerText}>{children}</p>
}

const bodyText = classnames(textColor('text-purple-200'), fontSize('text-lg'))
export function BodyText({ children }: ChildrenProp) {
  return <p className={bodyText}>{children}</p>
}

const link = classnames(textDecoration('underline'))
export function Link({
  children,
  href,
  noTarget,
}: {
  children: string
  href: string
  noTarget?: boolean
}) {
  return (
    <a
      className={link}
      href={href}
      target={noTarget ? undefined : '_blank'}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}
