import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postFmcerCertificate(
  args: InferRequestType<typeof client.fmcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fmcer.certificate.$post(args, options))
}
