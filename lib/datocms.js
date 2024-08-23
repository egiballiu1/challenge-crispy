import { SiteClient } from 'datocms-client'

export const client = new SiteClient(process.env.DATOCMS_API_TOKEN)

export async function fetchData(query) {
  return client.items.all({ query })
}
