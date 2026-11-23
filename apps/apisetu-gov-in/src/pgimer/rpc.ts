import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postLabrpCertificate(
  args: InferRequestType<typeof client.labrp.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labrp.certificate.$post(args, options))
}
