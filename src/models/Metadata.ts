export default interface Metadata {
  external_url: string
  image: string
  name: string
  description: string
  attributes: { trait_type: string; value: string | number }[]
  fid: number
}
