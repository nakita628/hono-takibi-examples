import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postModuleAuthV1Token(
  args: InferRequestType<typeof client.module.auth.v1.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.module.auth.v1.token.$post(args, options))
}
