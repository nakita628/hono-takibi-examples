import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function patchV2Name(
  args: InferRequestType<(typeof client.v2)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':name'].$patch(args, options))
}

export async function postV2ParentProfiles(
  args: InferRequestType<(typeof client.v2)[':parent']['profiles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent'].profiles.$post(args, options))
}

export async function postV2ParentProfilesCreateOffline(
  args: InferRequestType<(typeof client.v2)[':parent']['profiles:createOffline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2[':parent']['profiles:createOffline'].$post(args, options))
}
