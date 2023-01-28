import Metadata from 'models/Metadata'
import baseUrl from 'helpers/baseUrl'
import fetch from 'unfetch'

export default async function (slug: string) {
  const isNumber = !isNaN(Number(slug))
  const isExplicitUsername = slug.startsWith('@')
  const url =
    isNumber && !isExplicitUsername
      ? `${baseUrl}/metadata`
      : `${baseUrl}/username/metadata`
  const data = await (await fetch(`${url}/${slug.replaceAll('@', '')}`)).json()
  if (data.error) {
    throw new Error(data.error)
  }
  return data as Metadata
}
