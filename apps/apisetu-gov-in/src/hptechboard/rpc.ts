import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postDipcrCertificate(
  args: InferRequestType<typeof client.dipcr.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dipcr.certificate.$post(args, options))
}
