import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postNdcerCertificate(
  args: InferRequestType<typeof client.ndcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ndcer.certificate.$post(args, options))
}
