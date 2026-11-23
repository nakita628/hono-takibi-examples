import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postSocerCertificate(
  args: InferRequestType<typeof client.socer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.socer.certificate.$post(args, options))
}
