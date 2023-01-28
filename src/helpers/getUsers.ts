import Metadata from 'models/Metadata'
import baseUrl from 'helpers/baseUrl'
import fetch from 'unfetch'

export default async function (skip: number, limit: number) {
  const url = `${baseUrl}/users?skip=${skip}&limit=${limit}`
  const data = await (await fetch(url)).json()
  if (data.error) {
    throw new Error(data.error)
  }
  return data as (Metadata & { minted: boolean })[]
}
