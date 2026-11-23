import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postNbcerCertificate(
  args: InferRequestType<typeof client.nbcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nbcer.certificate.$post(args, options))
}
