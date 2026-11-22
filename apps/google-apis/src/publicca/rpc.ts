import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1beta1ParentExternalAccountKeys(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['externalAccountKeys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].externalAccountKeys.$post(args, options))
}
