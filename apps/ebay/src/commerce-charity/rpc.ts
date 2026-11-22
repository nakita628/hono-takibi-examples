import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCharityOrg(
  args: InferRequestType<typeof client.charity_org.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.charity_org.$get(args, options))
}

export async function getCharityOrgCharityOrgId(
  args: InferRequestType<(typeof client.charity_org)[':charity_org_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.charity_org[':charity_org_id'].$get(args, options))
}
