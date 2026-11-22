import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postDpcerCertificate(
  args: InferRequestType<typeof client.dpcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dpcer.certificate.$post(args, options))
}
