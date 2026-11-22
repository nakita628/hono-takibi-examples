import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postTrcerCertificate(
  args: InferRequestType<typeof client.trcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.trcer.certificate.$post(args, options))
}
