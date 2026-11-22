import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postSscerCertificate(
  args: InferRequestType<typeof client.sscer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sscer.certificate.$post(args, options))
}
