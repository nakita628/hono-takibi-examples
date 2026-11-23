import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1betaToken(
  args: InferRequestType<typeof client.v1beta.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta.token.$post(args, options))
}
