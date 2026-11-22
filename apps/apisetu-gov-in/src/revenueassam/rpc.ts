import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postNncerCertificate(
  args: InferRequestType<typeof client.nncer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nncer.certificate.$post(args, options))
}
