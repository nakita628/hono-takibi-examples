import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAuthCertificate(
  args: InferRequestType<typeof client.auth.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.certificate.$post(args, options))
}
