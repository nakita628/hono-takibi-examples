import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postRatcrCertificate(
  args: InferRequestType<typeof client.ratcr.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ratcr.certificate.$post(args, options))
}
