import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postPecerCertificate(
  args: InferRequestType<typeof client.pecer.certificate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pecer.certificate.$post(args, options))
}
