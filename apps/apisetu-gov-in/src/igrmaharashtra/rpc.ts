import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postLlcerCertificate(
  args: InferRequestType<typeof client.llcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.llcer.certificate.$post(args, options))
}
