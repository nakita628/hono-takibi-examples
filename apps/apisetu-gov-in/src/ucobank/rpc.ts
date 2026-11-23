import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postTdcerCertificate(
  args: InferRequestType<typeof client.tdcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tdcer.certificate.$post(args, options))
}
