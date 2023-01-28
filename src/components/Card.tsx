import { Link } from 'wouter'
import classnames, { cursor, maxWidth } from 'classnames/tailwind'

const container = classnames(maxWidth('max-w-xs'), cursor('cursor-pointer'))
export default function ({ id }: { id: number }) {
  return (
    <div className={container}>
      <Link href={`#/${id}`}>
        <img src={`https://metadata.farcantasy.xyz/image/${id}`} />
      </Link>
    </div>
  )
}
