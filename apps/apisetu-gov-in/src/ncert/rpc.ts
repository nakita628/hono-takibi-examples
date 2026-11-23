import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postMrcerCertificate(
  args: InferRequestType<typeof client.mrcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mrcer.certificate.$post(args, options))
}
