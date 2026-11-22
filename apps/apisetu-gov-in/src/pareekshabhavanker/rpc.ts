import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postSslcrCertificate(
  args: InferRequestType<typeof client.sslcr.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sslcr.certificate.$post(args, options))
}
