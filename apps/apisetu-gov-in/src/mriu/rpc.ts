import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postDgcerCertificate(
  args: InferRequestType<typeof client.dgcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dgcer.certificate.$post(args, options))
}
