import Metadata from 'models/Metadata'
import fetch from 'unfetch'

export default async function (slug: string) {
  const isNumber = !isNaN(Number(slug))
  const baseUrl = isNumber
    ? 'https://metadata.farcantasy.xyz/metadata'
    : 'https://metadata.farcantasy.xyz/username/metadata'
  const data = await (await fetch(`${baseUrl}/${slug}`)).json()
  if (data.error) {
    throw new Error(data.error)
  }
  return data as Metadata
}
