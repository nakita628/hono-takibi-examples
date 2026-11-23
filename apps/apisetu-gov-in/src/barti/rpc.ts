import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postCvcerCertificate(
  args: InferRequestType<typeof client.cvcer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cvcer.certificate.$post(args, options))
}
